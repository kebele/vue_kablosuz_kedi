export const mixinsIcin = {
    computed : {
        tersi(){
          return this.text.split('').reverse().join('') 
        },
        charUzun(){
          return `${this.text} (${this.text.length})`;
        }
      }
}