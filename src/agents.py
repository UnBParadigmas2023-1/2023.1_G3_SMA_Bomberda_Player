from mesa import Agent

class CellAgent(Agent):
    def __init__(self, unique_id, model, agent_type):
        super().__init__(unique_id, model)
        self.type = agent_type