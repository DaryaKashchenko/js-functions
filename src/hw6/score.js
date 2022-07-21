
    /**
 * Сложение двух чисел
 * @param {object} 
 * @returns {number} 
 */
     const scores = {
        Anna: 10,
        Olga: 1,
        Ivan: 5,
        }
    
    const values = Object.values(scores)
    
    function count(values) {
        let sum = 0;
        values.forEach(function(item){
            sum += item
        })
        return sum;
    }

   const summary = count(values)
    console.log(summary);


    module.exports =   summary 