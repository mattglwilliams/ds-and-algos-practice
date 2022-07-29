class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    // add the element to the end of the values array
    this.values.push(element);
    // call the bubble up function on the array
    this.bubbleUp();
  }
  bubbleUp() {
    // variable to keep track of the index we are at
    let idx = this.values.length - 1;
    // store the new element in the variable element
    const element = this.values[idx];
    while (idx > 0) {
      // variable to work out the current values parent
      let parentIdx = Math.floor((idx - 1) / 2);
      // variable to hold the current values parent
      let parent = this.values[parentIdx];
      // if the new node is less than its parent, its in the
      // correct place
      if (element <= parent) break;
      // if the element is bigger than the parent, swap them
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      // set the index to be the parentIdx and start over
      idx = parentIdx;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    // swap the root and the latest value
    this.values[0] = end;
    // start the bubble down process to re-order the heap correctly
    this.bubbleDown();
    // remove the old root
    return max;
  }
  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values(leftChildIdx);
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values(rightChildIdx);
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      idx = swap;
    }
  }
}
