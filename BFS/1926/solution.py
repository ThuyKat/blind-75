from collections import deque
class Solution(object):
    def nearestExit(self, maze, entrance):
        """
        :type maze: List[List[str]]
        :type entrance: List[int]
        :rtype: int
        """
        self.maze = maze
        self.row_num = len(maze)
        self.col_num = len(maze[0])
        self.visited = {tuple(entrance)}
        # an enqueue to add all next cell that need of check
        queue = deque()
        queue = self.add_cells_to_queue(entrance,queue,1)
        #check if it's the exit, else add all the empty cells surrounding it to the enqueue
        while queue:
            checking_cell = queue.popleft()
            row,col,depth = checking_cell
            if row == 0 or col == 0 or row == len(maze)-1 or col == len(maze[0])-1:
                # exit found 
                return depth
            else:
                self.add_cells_to_queue(checking_cell,queue,depth+1)
                    
                
        # # exit: when row/column = 0 | row == m | col == n
        # # if it's exit, return the step 
        # # else increment the step and add its surrounding cells to the queue
        return -1
    def add_cells_to_queue(self,current_cell, queue,step):
        directions = [(0,1),(0,-1),(-1,0),(1,0)]
        current_row = current_cell[0]
        current_col = current_cell[1]
        for direction in directions:
            direction_row,direction_col = direction
            next_row = current_row + direction_row
            next_col = current_col + direction_col
            
            if (0<=next_row < self.row_num and 0<=next_col <self.col_num and self.maze[next_row][next_col]!= "+" and (next_row,next_col) not in self.visited):
                queue.append((next_row,next_col,step))
                self.visited.add((next_row,next_col))
        return queue
                



        
        