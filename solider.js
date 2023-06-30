const solider = {
    name: 'John',
    health: 100,
    weapon: {
        nameWeapon: "AK-74",
        ammoWeapon: 30,
    },
    ammoMagazine: 3,
// Стрелять
    getStatus: function(){
        console.log(`Имя:${this.name} Здоровье: ${this.health} Патронов: ${this.weapon.ammoWeapon} Магазин:${this.ammoMagazine}`)
    },
shoot : function(){
        if(this.weapon.ammoWeapon === 0){
            console.log('Обойма пуста')
        }
        else{
        this.weapon.ammoWeapon--
        console.log('бах-бах');
        }
        

    },
    // Перезарядить
    reload: function () {
        if(this.ammoMagazine === 0){
            console.log("Нет боеприпасов");
        }
        else{
            
        this.weapon.ammoWeapon = 30
        this.ammoMagazine--
        }
    },
    // Ранить
    toHurt: function(){
        if(this.health === 0){
            console.log('Ты проиграл');
        }
        else{
            this.health--
        }
    },
        
}
solider.toHurt()
solider.toHurt()
solider.shoot()
solider.shoot()
solider.shoot()
solider.shoot()
solider.shoot()
solider.shoot()
solider.reload()
solider.getStatus()



