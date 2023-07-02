import browser as b
from mesa import Agent
from collections import deque


class CellAgent(Agent):
    def __init__(self, unique_id, model, agent_type, options = None ):
        super().__init__(unique_id, model)
        self.type = agent_type

        if options != None:
            self.can_go_up = options[0]
            self.can_go_down = options[1]
            self.can_go_left = options[2]
            self.can_go_right = options[3]
            self.can_bomb = True

    def step(self):
        if self.type == 'x':
            self.type = 'X'

class HeroAgent(Agent):
    def __init__(self, unique_id, model, pos):
        super().__init__(unique_id, model)
        self.pos = pos

    def step(self):
        has_treasure = self.model.get_has_treasure()
        has_enemy = self.model.get_has_enemy()
        
        if has_treasure and has_enemy:
            # Mapa com tesouro e inimigo
            pass

        elif has_treasure and not has_enemy:
            # Mapa com tesouro e sem inimigo
            path = self.bfs('.')
            if(path is not None):
                self.move(self.pos, path)
            else:
                print("Mapa sem solução")

        elif not has_treasure and has_enemy:
            # Mapa sem tesouro e com inimigo
            pass

        elif not has_treasure and not has_enemy:
            # Mapa sem tesouro e sem inimigo
            pass

    def move(self, current_pos, path):
        
        if len(path) == 0:
            return
        
        y_diff = path[0][0] - current_pos[0]
        x_diff = path[0][1] - current_pos[1]

        if path[0] == (-10, -10):
            b.bomb()
            #print("bomba")
            path = path[1:]
            path = [current_pos] + path
        elif x_diff == 1:
            b.goRight()
            #print("->")
        elif x_diff == -1:
            b.goLeft()
            #print("<-")
        elif y_diff == 1:
            b.goDown()
            #print("\/")
        elif y_diff == -1:
            b.goUp()
            #print("^")
       
        self.move(path[0], path[1:])

    def scape(self, current_pos, path, fire):

        if len(path) == 3:
            return [(-10, -10)] + path + [path[1], path[0]]
        
        grid = self.model.grid

        neighbors = grid.get_neighborhood(current_pos, False, False)
        for neighbor_pos in neighbors:
            neighbor_agents = grid.get_cell_list_contents([neighbor_pos])

            cell = None
            for agent in neighbor_agents:
                if isinstance(agent, CellAgent):
                    cell = agent
                    break
            
            #print(cell)
            #print(neighbor_agents)

            if len(path) == 2 and neighbor_pos in fire:
                continue

            if cell and cell.type not in ['#', '$', 'X', 'x']:
                path.append(neighbor_pos)
                ret = self.scape(neighbor_pos, path, fire)
                if ret == []:
                    path.pop()
                    continue
                else:
                    return ret
        return [] 

    def bfs(self, target_type):
        start_pos = self.pos
        grid = self.model.grid
        visited = set()
        queue = deque([(start_pos, [])])

        while queue:
            current_pos, path = queue.popleft()

            if current_pos in visited:
                continue

            visited.add(current_pos)

            agents = grid.get_cell_list_contents([current_pos])
            for agent in agents:
                if isinstance(agent, CellAgent) and agent.type == target_type:
                    #print("Achou" + str(path))
                    return path

            neighbors = grid.get_neighborhood(current_pos, False, False)
            for neighbor_pos in neighbors:
                neighbor_agent = grid.get_cell_list_contents([neighbor_pos])[0]
                if neighbor_pos not in visited and neighbor_agent.type not in ['#', 'X']:
                    bomb_scape = []
                    if neighbor_agent.type == '$':
                        bomb_scape = self.scape(current_pos, [], neighbors + [current_pos]) + [current_pos]
                        neighbor_agent.type = ' '
                        
                    queue.append((neighbor_pos, path + bomb_scape + [neighbor_pos]))
        
        return None
            
class EnemyAgent(Agent):
    def __init__(self, unique_id, model, pos):
        super().__init__(unique_id, model)
        self.pos = pos

    def step(self, dir):
        if dir == "left":
            # move para direita
            pass
        elif dir == "right":
            # move para esquerda
            pass
        elif dir == "up":
            # move para baixo
            pass
        elif dir == "down":
            # move para cima
            pass

""" 
Tesouro e ~Inimigo:     Pegar tesouro
Tesouro e Inimigo:      Pegar tesouro -> Matar inimigo -> Pegar tesouro
~Tesouro e Inimigo:     Matar inimigo -> Pegar tesouro
~Tesouro e ~Inimigo:    Desistir 
"""

"""
Busca o tesouro:
    - pega os adjacentes da posição inicial;
    - pega a posicao do inimigo
    - para cada um dos adjacentes:
        - se for do tipo ' ' 
"""
