from mesa import Model, time
from mesa.space import MultiGrid

import browser as b

from .agents import *

class bomberdaModel(Model):

    def __init__(self):
        self.current_id = 0
        self.has_enemy = False
        self.has_treasure = False
        self.has_hero = False

        mapa = b.getMap()
        splited_map = mapa.split('\n')
        splited_map = [line for line in mapa.split('\n') if line != '']

        height = len(splited_map)
        width = max(len(row)for row in splited_map)

        self.grid = MultiGrid(height, width, False)

        self.schedule = time.RandomActivation(self)

        for row in range(height):
            for col in range(width):
                symbol = splited_map[row][col] if col < len(splited_map[row]) else '#'
                
                if symbol == '@':
                    self.has_hero = True
                    new_hero = HeroAgent(self.next_id(), self, (row, col))
                    self.grid.place_agent(new_hero, (row, col))
                    self.schedule.add(new_hero)
                elif symbol == 'E':
                    self.has_enemy = True
                    new_enemy = EnemyAgent(self.next_id(), self, (row, col))
                    self.grid.place_agent(new_enemy, (row, col))
                elif symbol == '.':
                    self.has_treasure = True

                options = [] 
                if symbol not in ['#', 'X']:
                    options.append(splited_map[row+1][col] not in ['#', 'X', '$'])
                    options.append(splited_map[row-1][col] not in ['#', 'X', '$'])
                    options.append(splited_map[row][col-1] not in ['#', 'X', '$'])
                    options.append(splited_map[row][col+1] not in ['#', 'X', '$'])

                new_agent = CellAgent(self.next_id(), self, symbol, options if len(options) else None)
                self.grid.place_agent(new_agent, (row, col))
                
    def get_has_enemy(self):
        return self.has_enemy
    
    def get_has_treasure(self):
        return self.has_treasure

    def step(self):
        
        if self.has_hero and (self.has_treasure or self.has_enemy):
            """Advance the model by one step."""
            self.schedule.step()
        else:
            print("Mapa sem personagem ou objetivos...")
            return
