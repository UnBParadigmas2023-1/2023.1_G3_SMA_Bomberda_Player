import browser as b
from mesa import Agent
from collections import deque


class CellAgent(Agent):
    def __init__(self, unique_id, model, agent_type):
        super().__init__(unique_id, model)
        self.type = agent_type

    def step(self):
        pass

class HeroAgent(Agent):
    def __init__(self, unique_id, model, pos):
        super().__init__(unique_id, model)
        self.pos = pos

    def step(self):
        has_treasure = self.model.get_has_treasure()
        has_enemy = self.model.get_has_enemy()
        
        if has_treasure and has_enemy:
            print("Mapa com tesouro e inimigo")
        elif has_treasure and not has_enemy:
            print("Mapa com tesouro e sem inimigo")

            path = self.bfs('.')
            if(path is not None):
                self.move(self.pos, path)

        elif not has_treasure and has_enemy:
            print("Mapa sem tesouro e com inimigo")
        elif not has_treasure and not has_enemy:
            print("Mapa sem tesouro e sem inimigo")

    def move(self, current_pos, path):
        
        if len(path) == 0:
            return
        
        y_diff = path[0][0] - current_pos[0]
        x_diff = path[0][1] - current_pos[1]

        if x_diff == 1:
            b.goRight()
        elif x_diff == -1:
            b.goLeft()
        elif y_diff == 1:
            b.goDown()
        elif y_diff == -1:
            b.goUp()
       
        print(x_diff, y_diff)
        self.move(path[0], path[1:])

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
                    print("Achou" + str(path))
                    return path

            neighbors = grid.get_neighborhood(current_pos, moore=True, include_center=False)
            for neighbor_pos in neighbors:
                neighbor_agent = grid.get_cell_list_contents([neighbor_pos])[0]
                if neighbor_pos not in visited and neighbor_agent.type != '#':
                    queue.append((neighbor_pos, path + [neighbor_pos]))
        
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