function solution(data) {
    const recPrototype = {
      area() {
        return this.height * this.width;
      },
      compareTo(otherRec) {
        const currentRecArea = this.area();
        const otherRecArea = otherRec.area();
        return otherRecArea - currentRecArea;
      }
    };
   
    function createRec(width, height) {
      const result = Object.create(recPrototype);
      result.width = width;
      result.height = height;
      return result;
    }
   
    return data.reduce(function (acc, [width, height]) {
      return acc.concat(createRec(width, height));
    }, []).sort((a, b) => b.width - a.width).sort((a, b) => a.compareTo(b));
  }