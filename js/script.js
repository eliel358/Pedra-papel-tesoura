// 1 = pedra
// 2 = papel
// 3 = tesoura

function play(choice){
    cpu_choice = Math.floor(Math.random()*3) +1;
    console.log(cpu_choice)
    if (cpu_choice == 1){
        document.getElementById('cpu').innerHTML = 'Jogada da cpu: Pedra'
    }
    if (cpu_choice == 2){
        document.getElementById('cpu').innerHTML = 'Jogada da cpu: Papel'
    }
    if (cpu_choice == 3){
        document.getElementById('cpu').innerHTML = 'Jogada da cpu: Tesoura'
    }
    if(choice == cpu_choice){
        document.getElementById('placar').innerHTML = 'Empate\n._.'
    }else{
        if(choice == 1){
            if(cpu_choice == 2){
                document.getElementById('placar').innerHTML = 'Derrota\<br>:('

            }
            if(cpu_choice == 3){
                document.getElementById('placar').innerHTML = 'Vitoria!!'
            }
        }
        if(choice == 2){
            if(cpu_choice == 3){
                document.getElementById('placar').innerHTML = 'Derrota\<br>:('
            }
            if(cpu_choice == 1){
                document.getElementById('placar').innerHTML = 'Vitoria!!'
            }
        }
        if(choice == 3){
            if(cpu_choice == 1){
                document.getElementById('placar').innerHTML = 'Derrota\<br>:('
            }
            if(cpu_choice == 2){
                document.getElementById('placar').innerHTML = 'Vitoria!!'
            }
        }
    }

}
play(1)