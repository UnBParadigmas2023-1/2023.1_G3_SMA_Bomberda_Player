from mesa import Model, time
from mesa.space import MultiGrid

import browser as b

from .agents import *

class bomberdaModel(Model):

    def __init__(self):
        self.current_id = 0
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
                    pass
                    # Adicionar o personagem
                elif symbol == 'E':
                    pass
                    # Adicionar o inimigo

                new_agent = CellAgent(self.next_id(), self, symbol)
                self.grid.place_agent(new_agent, (row, col))