(function(exports) {
  exports.checkPlan = function(mapstr, planstr) {
    checkPlan(mapstr, planstr);
  };
  exports.generateLevel = function(width, heigth, needsBomb, hasEnenmy) {
    return generateLevel(width, heigth, needsBomb, hasEnenmy);
  };

}(typeof exports === 'undefined' ? this.bomberda = {} : exports));


var bomb;
var hero;
var level;
var enemy;
var coin;
var plan;


const items = {
		WALL:"#",
		PLAYER:"@",
		BOX:"$",
		COIN:".",
		FLOOR:" ",
		ENEMY:"E",
		FRAGILE_FLOOR:"x",
		COLLAPSED_FLOOR:"X",
    UNDEF:"-",
};

const moves = {
  GO_UP:"up",GO_DOWN:"down",GO_LEFT:"left",GO_RIGHT:"right",PUT_BOMB:"put"
};

function checkPlan(mapstr, planstr) {
  loadLevel(mapstr);
  loadPlan(planstr);
  console.log("PLAN:");
  console.log(planstr);

  if (plan.length == 0) {
    console.log("Plan is EMPTY!");
    return;
  }

  for (var i = 0; i < plan.length; i++) {
    console.log(plan[i], hero, coin, enemy, bomb);
    step(plan[i]);
    if (hero.dead) {
    	console.log("Plan is INCORRECT -- hero died");
      return;
    }
  }
  if (hero.win) {
  	console.log("Plan is CORRECT");
  } else {
    console.log("Plan is INCORRECT -- treasure not collected");
  }
}

function loadPlan(planstr) {
  plan = new Array;
  for (var i = 0; i < planstr.length; i++) {
    var symbol = planstr[i];
    if (symbol == 'U') {
      plan.push(moves.GO_UP);
    }
    if (symbol == 'D') {
      plan.push(moves.GO_DOWN);
    }
    if (symbol == 'L') {
      plan.push(moves.GO_LEFT);
    }
    if (symbol == 'R') {
      plan.push(moves.GO_RIGHT);
    }
    if (symbol == 'B') {
      plan.push(moves.PUT_BOMB);
    }
  }
  return plan;
}

function die() {
	console.log("Hero died");
  hero.dead = true;
}

var maze;

function generateLevel(width, heigth, needsBomb, hasEnemy) {
  genMaze(width,heigth);
  maze.map[0][0] = items.PLAYER;
  if (hasEnemy == true) {
    maze.map[width-2][heigth-2] = items.ENEMY;
  } else {
    maze.map[width-2][heigth-2] = items.COIN;
  }
  if (needsBomb == true) {
	  for (var y = 0; y < heigth-1; y++) {
		  for (var x = 0; x < width-1; x++) {
        if (Math.abs((heigth - y) - x)<1 && maze.map[x][y] != items.WALL) {
          maze.map[x][y] = items.BOX;
        }
        if (Math.abs((heigth - y) - x)<(width/2) && Math.random() < 0.1) {
          maze.map[x][y] = items.BOX;
        }
      }
    }
  } else if (hasEnemy == true) {
    maze.map[width-2][heigth-2] = items.COIN;
    if (maze.map[width-3][heigth-2] != items.WALL) {
      maze.map[width-3][heigth-2] = items.ENEMY;
    } else {
      maze.map[width-2][heigth-3] = items.ENEMY;
    }
  }
  var levStr="";
	for (var x = 0; x <= width; x++) {
    levStr += items.WALL;
  }
  levStr+= "\n";
	for (var y = 0; y < heigth; y++) {
    levStr += items.WALL;
		for (var x = 0; x < width; x++) {
      if (maze.map[x][y] == items.UNDEF) {
        maze.map[x][y] = items.WALL;
      }
			levStr += maze.map[x][y];
		}
    levStr += "\n";
	}
  return levStr;
}

function genMaze(sizex, sizey) {
  maze = {};
	maze.sizex = sizex;
	maze.sizey = sizey;
	maze.map = new Array();
	for (var x = 0; x < sizex; x++) {
		maze.map[x] = new Array();
		for (var y = 0; y < sizey; y++) {
			maze.map[x][y] = items.UNDEF;
		}
	}
	recExplore(2,2);	
}

function unseen(x,y) {
	if (x < 0 || y < 0 || x >= maze.sizex || y >= maze.sizey) return false;
	return maze.map[x][y] == items.UNDEF;
}

function set(x,y,k) {
	if (x < 0 || y < 0 || x >= maze.sizex || y >= maze.sizey) return false;
	maze.map[x][y]=k;
}

function recExplore(x,y) {
	maze.map[x][y] = items.FLOOR;
	var pos = new Array()
	if (unseen(x-2,y)) pos.push([x-2,y]);
	if (unseen(x+2,y)) pos.push([x+2,y]);
	if (unseen(x,y+2)) pos.push([x,y+2]);
	if (unseen(x,y-2)) pos.push([x,y-2]);
	while (pos.length > 0) {
		var rnd = Math.floor(Math.random()*pos.length);
		var newx = pos[rnd][0];
		var newy = pos[rnd][1];
		//console.log(pos,rnd,newx,newy);
		if (newx != x) {
			set(newx,y-1,items.WALL);
			set(newx,y+1,items.WALL);
			set((x+newx)/2,y,items.FLOOR);
		} else {
			set(x+1, newy,items.WALL);
			set(x-1, newy,items.WALL);
			set(x, (y+newy)/2,items.FLOOR);
		}
		recExplore(newx,newy);
		pos = [];
		if (unseen(x-2,y)) pos.push([x-2,y]);
		if (unseen(x+2,y)) pos.push([x+2,y]);
		if (unseen(x,y+2)) pos.push([x,y+2]);
		if (unseen(x,y-2)) pos.push([x,y-2]);
	}
}

function loadLevel(levstr) {
  // levstr = document.getElementById("customLevel").value
	level = new Level(levstr);
	var hloc = level.find(items.PLAYER);
  console.log(hloc);
	hero = new Hero(hloc.x,hloc.y);
	var cloc = level.find(items.COIN);
  if (cloc) {
  	coin = new Coin(cloc.x,cloc.y);
  } else {
    coin = null;
  }
	var eloc = level.find(items.ENEMY);
	if (eloc) {
		enemy = new Spider(eloc.x,eloc.y);
	} else {
		enemy = null;
	}
	bomb = null;
}

function step(move)	{
	if (move == moves.PUT_BOMB) {
		// placing a bomb
    if (bomb && bomb.active) {
      return;
    }
 		bomb = new Bomb(hero.x,hero.y);
		return;
	}
	
	var cx = hero.x;
	var cy = hero.y;
	var gx = cx;
	var gy = cy;
	switch (move) {
	case moves.GO_LEFT: 
		gx--;
		break;
	case moves.GO_RIGHT: 
		gx++;
		break;
	case moves.GO_UP: 
		gy--;
		break;
	case moves.GO_DOWN: 
		gy++;
		break;
	default:
		return;
	}
	
	if (level.walkable(gx,gy)) {
		hero.moveTo(gx,gy);
		if (hero.update()) {
			return;
		}
		if (enemy) {
			var gex = enemy.x - gx + cx;
			var gey = enemy.y - gy + cy;
			if (level.walkable(gex,gey)) {
				enemy.moveTo(gex,gey);
			}
			if (enemy.update()) {
				return ;
			}
		}
		if (bomb) {
			if (bomb.update()) {
				return;
			}
		}
    if (hero.checkwin()) {
      return;
    }
	}
};

class BaseGO {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}
	
	moveTo(x,y) {
		var oldx = this.x;
		var oldy = this.y;
		this.x = x;
		this.y = y;
		if (level.grid[oldy][oldx] == items.FRAGILE_FLOOR) {
			level.collapse(oldx,oldy);
		}
	}
	
}

class Hero extends BaseGO {
	constructor(x,y) {
		super(x,y)
    this.dead = false;
    this.win = false;
	}
	
  checkwin() {
		if (this.dead == false && coin && this.x == coin.x && this.y == coin.y) {
      this.win = true;
			return true;
		}
  }
	
	update() {
		if (enemy && this.x == enemy.x && this.y == enemy.y) {
			die();
			return true;
		}
		return false;
	}
}


class Spider extends BaseGO {
	constructor(x,y) {
		super(x,y)
	}
	
	update() {
		if (this.x == hero.x && this.y == hero.y) {
			die();
			return true;
		}
		return false;
	}
	
}

class Coin extends BaseGO {
	constructor(x,y) {
		super(x,y)
	}
}



class Bomb extends BaseGO {
	constructor(x,y) {
		super(x,y)
		this.time = 3;
		this.active = true;
		this.exploding = false;
	}
	
	explosion(x,y) {
		level.explosion(x,y);
		if (hero.x == x && hero.y == y) {
			die();
			return;
		}
		if (enemy && enemy.x == x && enemy.y == y) {
			enemy = null;
      if (!coin) coin = new Coin(x,y);
			return;
		}
		
	}

	update() {
		if (this.exploding) {
			this.exploding = false;
			return;
		}
		if (!this.active) return;
		this.time--;
		if (this.time == 0) {
      this.active = false;
			this.exploding = true;
			this.explosion(this.x,this.y);
			this.explosion(this.x+1,this.y);
			this.explosion(this.x-1,this.y);
			this.explosion(this.x,this.y+1);
			this.explosion(this.x,this.y-1);
		}
	}
}

class Level {
	constructor(levelString) {
		this.grid = levelString.split("\n").map(function(x){return x.split("")});
    this.heigth = this.grid.length;
    this.width = 0;
		for (var y = 0; y < this.grid.length; y++) {
      if (this.grid[y].length > this.width) {
        this.width = this.grid[y].length;
      }
    }
	}
	
	find(item) {
		for (var y = 0; y < this.grid.length; y++) {
			for (var x = 0; x < this.grid[y].length; x++) {
				if (this.grid[y][x] == item) {
					return {x,y};
				}
			}
		}
	}
  	
	explosion(x,y) {
		if (this.grid[y][x] == items.BOX) {
			this.grid[y][x] = items.FLOOR;
		}
		if (this.grid[y][x] == items.FRAGILE_FLOOR) {
			this.grid[y][x] = items.COLLAPSED_FLOOR;
		}
	}
	
	walkable(x,y) {
		var item = this.grid[y][x];
		return item != items.WALL && item != items.BOX && item != items.COLLAPSED_FLOOR;
	}	
	
	collapse(x,y) {
		var item = this.grid[y][x];
		if (this.grid[y][x] == items.FRAGILE_FLOOR) {
			this.grid[y][x] = items.COLLAPSED_FLOOR;
		}
		if (hero.x == x && hero.y == y) {
			die();
			return;
		}
		if (enemy && enemy.x == x && enemy.y == y) {
			enemy = null;
		}
	}
}


