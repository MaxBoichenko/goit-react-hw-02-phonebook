import { Component } from 'react';

export class Contacts extends Component {
  state = {
    filter: '',
  };

  handleStringChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filteredContacts = data => {
    console.log(data);
    return data.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase().trim())
    );
  };

  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          onChange={this.handleStringChange}
          value={this.state.filter}
        />
        <ul>
          {this.filteredContacts(this.props.data).map(contact => (
            <li key={contact.id}>
              <span>{contact.name}</span>
              <span> {contact.number}</span>
              <button
                type="button"
                onClick={() => this.props.deleteContact(contact.id)}
              >
                Удалить контакт
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
