import React, {Component} from 'react'
import './style.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero:0,
            btn : 'VAI'
        };


        // variavel que armazena o relogio
        this.timer = null;
        this.limpar = this.limpar.bind(this);
        this.vai = this.vai.bind(this);


        
    }

    vai(){

        let state  = this.state;

        if(this.timer != null)
        {
            clearInterval(this.timer)
            this.timer = null;
            state.btn = 'VAI';   
        }
        else
        {
            this.timer = setInterval(()=>{
                let state = this.state;
                state.numero += 0.1;
                this.setState(state)
            },100)
            state.btn = 'PAUSAR';

        }

        this.setState(state)
    }


    //Função limpar timer

    limpar(){
        let state = this.state;
        if(this.timer != null)
        {
            clearInterval(this.timer)
            this.timer = null;
        }

        state.numero = 0;
        state.btn = 'VAI';
        this.setState(state);
    }

    render()
    {
        return(
            <div className='container'>
                <img className='img' src={require('./assets/cronometro.png')}/>
                <a className='timer'>{this.state.numero.toFixed(1)}</a>
                <div className='areaBtn'>
                    <a className='btn' onClick={this.vai}>{this.state.btn}</a>
                    <a className='btn' onClick={this.limpar}>LIMPAR</a>
                </div>
            </div>
        );
    }

}


export default App;