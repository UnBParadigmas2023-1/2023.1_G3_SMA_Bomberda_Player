from mesa import Model, time
from mesa.space import MultiGrid

import browser as b

from .agents import *

class bomberdaModel(Model):

    def __init__(self):
        self.current_id = 0
        self.has_enemy = False
        self.has_treasure = False
        
        mapa = b.getMap()
        splited_map = mapa.split('\n')
        splited_map.remove('')

        height = len(splited_map)
        width = max(len(row)for row in splited_map)

        self.grid = MultiGrid(height, width, False)

        self.schedule = time.RandomActivation(self)

        for row in range(height):
            for col in range(width):
                symbol = splited_map[row][col]
                
                if symbol == '@':
                    new_hero = HeroAgent(self.next_id(), self, (row, col))
                    self.grid.place_agent(new_hero, (row, col))
                    self.schedule.add(new_hero)
                elif symbol == 'E':
                    self.has_enemy = True
                    new_enemy = EnemyAgent(self.next_id(), self, (row, col))
                    self.grid.place_agent(new_enemy, (row, col))
                    #self.schedule.add(new_enemy)
                elif symbol == '.':
                    self.has_treasure = True

                new_agent = CellAgent(self.next_id(), self, symbol)
                self.grid.place_agent(new_agent, (row, col))
                #self.schedule.add(new_agent)
                
    def get_has_enemy(self):
        return self.has_enemy
    
    def get_has_treasure(self):
        return self.has_treasure

    def step(self):

        """Advance the model by one step."""
        self.schedule.step()