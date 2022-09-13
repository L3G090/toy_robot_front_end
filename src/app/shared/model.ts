export const COMMAND = {
    PLACE: 'PLACE',
    MOVE: 'MOVE',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    REPORT: 'REPORT'
} 

export const DIRECTION = {
    NORTH: 'NORTH',
    SOUTH: 'SOUTH',
    EAST: 'EAST',
    WEST: 'WEST'
}

export const MAX_LENGHT = 5;

export interface RobotInfoInterface {
    x: number,
    y: number,
    f: string
}