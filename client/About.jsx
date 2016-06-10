import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {

  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
    return(
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={400}
        transitionLeaveTimeout={400}
        transitionAppear={true}
        >
        <h1> About Us </h1>
        <p>Результаты, приведенные в табл.1 показывают, что на 7-й день при интоксикации CdCl2 в концентрациях 5 и 10 мкМ происходило увеличение на 6% количества проростков Thlaspi arvense с двумя листами по отношению к контрольному значению. Начиная с 10-го дня вегетации до конца эксперимента, при действии хлоридом кадмия (II) в концентрации 10 мкМ происходило увеличение на 5-10% проростков с двумя листами, а при 5 мкМ исследуемый показатель статистически достоверно не отличался от контрольного значения. При интоксикации CdCl2  в концентрациях 20, 40 и 80 мкМ на протяжении всего эксперимента количество проростков с двумя листами было ниже на 14-32% в сравнение с контролем </p>
        <button onClick={this.setVar}>Sing Up</button>
      </ReactCSSTransitionGroup>
    )
  }
}
