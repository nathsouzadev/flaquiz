import styled from 'styled-components';
import PropTypes from 'prop-types';
import db from '../../../db.json';
import Link from '../Link';

function Logo({className}){
    return(
      <Link href="/">
        <img className={className} height={150} src={db.logo} />
      </Link>
    )
}

Logo.propTypes = {
    className: PropTypes.string.isRequired,
  };
  
  const QuizLogo = styled(Logo)`
    margin: auto;
    display: block;
    @media screen and (max-width: 500px) {
      margin: 0;
    }
  `;
  
export default QuizLogo;