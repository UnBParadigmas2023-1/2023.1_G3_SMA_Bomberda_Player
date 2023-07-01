import mesa
import browser as b

class bomberdaModel(mesa.Model):

    def __init__(self):

        mapa = b.getMap()
        splited_map = mapa.split('\n')
        
        splited_map.remove('')
        h = len(splited_map)
        w = max(len(row)for row in splited_map)
        #print("h: " + str(h) + " w: " + str(w))
      
