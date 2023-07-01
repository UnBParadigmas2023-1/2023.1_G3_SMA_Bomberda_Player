from mesa import Agent

class CellAgent(Agent):
    def __init__(self, unique_id, model, agent_type):
        super().__init__(unique_id, model)
        self.type = agent_type

    def step(self):
        print("Hi, I am agent " + str(self.unique_id) + "type: " + str(self.type))

class HeroAgent(Agent):
    def __init__(self, unique_id, model, pos):
        super().__init__(unique_id, model)
        self.pos = pos

    def step(self):
        print("Hi, I am agent " + str(self.unique_id) + "type: hero position: " + str(self.pos))

class EnemyAgent(Agent):
    def __init__(self, unique_id, model, pos):
        super().__init__(unique_id, model)
        self.pos = pos

    def step(self):
        print("Hi, I am agent " + str(self.unique_id) + "type: enemy position: " + str(self.pos))