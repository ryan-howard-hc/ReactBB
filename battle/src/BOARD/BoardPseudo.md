CreateHexagonBoard():
    Define boardRadius
    Initialize board as a hexagon with radius boardRadius
    
InitializeHexagonBoard():
    For each hexagon in board:
        Set hexagon to Empty

PlaceUnits():
    Define numberOfUnits
    For i = 0 to numberOfUnits:
        Define randomHexagon
        Set unitPosition = randomHexagon
        Place unit at unitPosition on board

DisplayHexagonBoard():
    For each hexagon in board:
        Display hexagon contents

UpdateHexagonBoard():
    Repeat for each unit on the board:
        Perform unit's actions

MainLoop():
    CreateHexagonBoard()
    InitializeHexagonBoard()
    PlaceUnits()
    
    While gameRunning:
        DisplayHexagonBoard()
        UpdateHexagonBoard()
