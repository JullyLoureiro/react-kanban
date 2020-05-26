import React from 'react'
import Board from 'react-trello'
import AddIcon from '@material-ui/icons/Add'
import { Fab } from '@material-ui/core'
import Modal from './Modal'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      open: false,
      data: {
        lanes: [
          {
            id: 'lane1',
            title: 'A fazer',
            style: { backgroundColor: '#717dc4', color: '#fff' },
            cardStyle: { backgroundColor: '#fff' },
            label: '0/0',
            cards: [
              //  {id: 'Card1', title: 'Juliana', description: 'Muitooo legal', label: '30 mins', draggable: false},
              //  {id: 'Card2', title: 'Artur', description: 'Chatinho demais', label: '5 mins', metadata: {sha: 'be312a1'}},
            ]
          },
          {
            id: 'lane2',
            title: 'Desenvolvendo',
            style: { backgroundColor: '#717dc4', color: '#fff' },
            label: '0/0',
            cards: []
          },
          {
            id: 'lane3',
            style: { backgroundColor: '#717dc4', color: '#fff' },
            title: 'Homologando',
            label: '0/0',
            cards: []
          },
          {
            id: 'lane4',
            title: 'Concluído',
            style: { backgroundColor: '#717dc4', color: '#fff' },
            label: '0/0',
            cards: []
          }
        ]
      }
    }
  }

  saveModal(result){
      var obj = { id: `Card${result.title}`, title: result.title, description: result.description, label: '30 mins', draggable: true}

      var cards1 = this.state.data.lanes[0].cards
      var dados = this.state.data
      cards1.push(obj)
      dados.lanes[0].cards = cards1
     
      localStorage.setItem('dados', JSON.stringify(dados))
     
      this.setState({
          open: false, data: dados
      }, ()=>{
          this.recarregaDados()
      })
  }

  componentDidMount(){
      this.recarregaDados()
  }

  recarregaDados(){
    var dados = localStorage.getItem('dados')
    if(dados)this.setState({data: JSON.parse(dados)})
  }

  render() {
    return (
      <div>
        <Board 
          data={this.state.data} 
          style={{backgroundColor: '#fff'}} 
        />
        
        <Fab onClick={()=>this.setState({open: true})} style={{position: 'fixed', bottom: 15, right: 15}} color="primary" aria-label="add">
          <AddIcon />
        </Fab>

        <Modal 
          open={this.state.open} 
          closeModal={()=>this.setState({open: false})}
          saveModal={(result)=>this.saveModal(result)}
        />
      </div>
    )
  }
}