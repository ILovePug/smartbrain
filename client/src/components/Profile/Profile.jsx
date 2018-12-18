import React,{Component} from "react";
import { APIUrl } from '../../keys'

import "./Profile.css";
class Profile extends Component {

  state={
    name: this.props.user.name,
    age: this.props.user.age,
    pet: this.props.user.pet
  }

  onFormChange=(evt)=>{
    switch (evt.target.name) {
      case "user-name":
        this.setState({name: evt.target.value})
        break;
        case "user-age":
        this.setState({age: evt.target.value})
        break;
        case "user-pet":
        this.setState({pet: evt.target.value})
        break;
      default:
        break;
    }
  }

  onProfileUpdate=(data)=>{
    fetch(APIUrl + '/profile/' + this.props.user.id, {
      method: 'post',
      headers: {'Content-Type': 'application/json','Authorization': window.sessionStorage.getItem('token')},
      body: JSON.stringify({
        formInput:data
      })
    })
      .then(resp=>{
        this.props.toggleModal();
        this.props.loadUser({...this.props.user, ...data})
      })

  }

  render(){
    const {toggleModal } = this.props;
    const {name,age,pet} = this.state;
    return (
      <div className="profile-modal">
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
          <main className="pa4 black-80 w-80">
            <img
              src="http://tachyons.io/img/logo.jpg"
              alt="avatar"
              className="h3 w3 dib"
            />
            <h1>{name}</h1>
            <h4>Images submitted: 5</h4>
            <p>Member since: Janurary</p>
            <hr />
            <div className="measure">
              <label className="mt2 fw6" htmlFor="user-name">
                Name
              </label>
              <input
                className="pa2 ba w-100"
                placeholder="john"
                type="text"
                name="user-name"
                id="name"
                onChange={this.onFormChange}
                value={name}
              />
              <label className="mt2 fw6" htmlFor="user-age">
                Age
              </label>
              <input
                className="pa2 ba w-100"
                placeholder="56"
                type="text"
                name="user-age"
                id="age"
                onChange={this.onFormChange}
                value={age}
              />
              <label className="mt2 fw6" htmlFor="user-pet">
                Pet
              </label>
              <input
                className="pa2 ba w-100"
                placeholder="dragon"
                type="text"
                name="user-pet"
                id="pet"
                onChange={this.onFormChange}
                value={pet}
              />
            </div>
            <div className="mt4" style={{display:'flex', justifyContent:'space-evenly'}}>
              <button onClick={()=>this.onProfileUpdate({name,age,pet})} className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20">
                Save
              </button>
              <button onClick={toggleModal} className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20">
                Cancel
              </button>
            </div>
          </main>
          <div className="modal-close" onClick={toggleModal}>&times;</div>
        </article>
      </div>
    );
  }
  
}


export default Profile;