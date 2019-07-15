import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';


const Container = styled.div`
display: flex;
flex-wrap: wrap;
> h4 {
    width: 50%
}
> input {
    width: 30%
}
> button {
    width: 18%
}
`

const Input = styled.input`
margin-top: 0.9rem;
height: 25px;
background-color: lightgrey;
`

class GameSettings extends Component {
    state = {
        mouse: {
            dpi: null,
            sensitivityX: null,
            sensitivityY: null,
            hz: null,
            targetingSensitivity: null,
            scopeSensitivity: null
        },
        keyboard:  {
            wall: null,
            floor: null,
            stairs: null,
            roof: null,
            trap: null,
            use: null,
            buildingEdit: null
        }

    };

    componentDidMount() {
        // console.log("comp did mount")
    }
    render()
    {

    return (
        <div>
            <h2>Mouse Settings</h2>
            <Container>
            <h4>DPI</h4><Input value={this.state.mouse.dpi} type="number"/><button>Submit</button>
            <h4>Sensitivity X</h4><Input value={this.state.mouse.sensitivityX} type="number"/><button>Submit</button>
            <h4>Sensitivity Y</h4><Input value={this.state.mouse.sensitivityY} type="number"/><button>Submit</button>
            <h4>hz</h4><Input value={this.state.mouse.hz} type="number"/><button>Submit</button>
            <h4>Targeting Sensitivity</h4><Input value={this.state.mouse.targetingSensitivity} type="number"/><button>Submit</button>
            <h4>Scope Sensitivity</h4><Input value={this.state.mouse.scopeSensitivity} type="number"/><button>Submit</button>
            </Container>
           
            <h2>Keyboard bindings</h2>
            <Container>
            <h4>Stairs</h4><Input value={this.state.keyboard.wall} type="letter"/><button>Submit</button>
            <h4>Floor</h4><Input value={this.state.keyboard.floor} type="letter"/><button>Submit</button>
            <h4>Roof</h4><Input value={this.state.keyboard.roof} type="letter"/><button>Submit</button>
            <h4>Trap</h4><Input value={this.state.keyboard.trap} type="letter"/><button>Submit</button>
            <h4>Usa</h4><Input value={this.state.keyboard.use} type="letter"/><button>Submit</button>
            <h4>Edit</h4><Input value={this.state.keyboard.buildingEdit} type="letter"/><button>Submit</button>
            </Container>

            <h2>Search Players Settings</h2>
        <p>need to call api/database of pro players settings, check prosettings.com first (maybe screen scape)</p>
        </div>
       
    );
  }
}

export default GameSettings;
