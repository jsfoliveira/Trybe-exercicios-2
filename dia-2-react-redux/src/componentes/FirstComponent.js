import React from 'react';
import { connect } from 'react-redux';

class FirstComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.myFirstState.map((element,index) => (
            <p key={ index }>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}
// A função mapStateToProps , auto-descritiva, mapeia as entidades armazenadas nos estados para uma props .
// queremos acessar os dados providos pelo reducer myReducer , portanto basta acessar o caminho do state com o reducer desejado e nomear a prop que o receberá (no caso, chamamos de myFirstState ).
const mapStateToProps = state => ({
  myFirstState: state.myReducer.state});

  // O método connect nos dá acesso a store do Redux. Utilizamos o connect para conectar o Redux ao componente. Basta passar a função mapStateToProps no primeiro parênteses e o componente no segundo.

export default connect(mapStateToProps, null)(FirstComponent);