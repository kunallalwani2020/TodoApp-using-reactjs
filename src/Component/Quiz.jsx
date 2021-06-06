import React from"react";
import"../App.css";
import firebase from'../Component/config/Firebase';
 export default class Quiz extends React.Component{
     constructor(){
         super()
         this.state=({
             todos:[],
             value:"",
             
          
         })
    
        }
        addtodo=()=>{
          let obj ={title: this.state.value}
          firebase.database().ref("todo").child("Todos").push(obj)
          this.setState({
              todos: [...this.state.todos,obj],
              value: '',
          })
        }
        dlt=(index)=>{
            
        this.state.todos.splice(index,1)
      
            this.setState({
                todos: this.state.todos
               
            })
        }
    //  see=(e)=>{
    //     this.setState(
    //     [e.target.todos]=e.target.value
    //     )}
 
       
    
   
    render(){
        let {todos, value} = this.state;
        return(
            
                <div className="Main" >
                    <div className ="Center">
                  
                        <input value={value} type="text" placeholder="Enter todos" className="input" onChange={(e)=>this.setState({value: e.target.value})}/>
                        <button className="ADD" onClick={this.addtodo}>+</button>
                       
                  
                 <ul className="state">
                 {todos.map((v,i)=>{
                     return <li key={i} className="screen">
                         <button className="DLT" onClick={()=>this.dlt(i)}>  x</button>
                         {v.title}
                        
                        
                     
                     </li>
                    
                    
                 
                    }

                 )}
                 </ul>
                </div>
                </div>
        )
    }
} 