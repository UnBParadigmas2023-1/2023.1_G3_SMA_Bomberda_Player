import browser as b
import time
import sys
import os
import src.model as m

arg = None

def title():
    os.system("clear")

    print("   ___                 _                  _           ___ _                       ")
    print("  / __\ ___  _ __ ___ | |__   ___ _ __ __| | __ _    / _ \ | __ _ _   _  ___ _ __ ")
    print(" /__\/// _ \| '_ ` _ \| '_ \ / _ \ '__/ _` |/ _` |  / /_)/ |/ _` | | | |/ _ \ '__|")
    print("/ \/  \ (_) | | | | | | |_) |  __/ | | (_| | (_| | / ___/| | (_| | |_| |  __/ |   ")
    print("\_____/\___/|_| |_| |_|_.__/ \___|_|  \__,_|\__,_| \/    |_|\__,_|\__, |\___|_|   ")
    print("                                                                  |___/           ")

def main_menu():
    title()
    print("\n\tEscolha uma opção...")
    print("\n[1] Jogar fases")
    print("[2] Fase customizada")
    print("[0] Sair")

def invalid_option():
    print("\tOpção inválida! Tente novamente...")
    time.sleep(2)

def init_fases():
    browser = os.environ.get('BROWSER')
    b.openBrowser(browser)
    b.goUp()
    b.goUp()
    m.bomberdaModel()

def init_custom(path):

    with open(path, 'r') as file:
        buffer = file.read()

    browser = os.environ.get('BROWSER')
    b.openBrowser(browser)
    b.setMap(buffer)

def custom_mode():
    if arg == "-test":
        init_custom("test_custom_map.txt")
        b.goUp()
        b.goRight()
        b.goDown()
        b.goLeft()
        b.bomb()
        b.goUp()
        b.goUp()
        b.goUp()
        b.reset()

    else:
        while 1:
            title()
            print("\n\tModo mapa customizado")
            print("\nAqui você pode criar um mapa desafio para o player jogar.")
            print("O mapa deve ser descrito em um aruivo de texto, o qual deverá ser identificado adiante.")
            print("O mapa é definido na seguinte sintaxe:")
            print("  - Piso:        símbolo ' ' (space)")
            print("  - Parede:      símbolo '#'")
            print("  - Piso Frágil: símbolo 'x'")
            print("  - Buraco:      símbolo 'X'")
            print("  - Caixa:       símbolo '$'")
            print("  - Player:      símbolo '@'")
            print("  - Inimigo:     símbolo 'E'")
            print("  - Tesouro:     símbolo '.'")
            print("\n\tDigite o caminho do seu arquivo de mapa\n\t[0] Voltar")
            print("\n>> ", end="")

            enter = str(input())
            if enter == "0":
                break
        
            init_custom(enter)

def main():
    
    while 1:
        main_menu()
        print("\n>> ", end="")
        enter = str(input())

        if enter == "1":
            init_fases()
        elif enter == "2":
            custom_mode()
        elif enter == "0":
            break
        else:
            invalid_option()
    
if __name__ == "__main__":
    arg = (sys.argv[1] if len(sys.argv) > 1 else None)
    main()
