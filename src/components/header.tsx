import * as React from 'react';
import { Link } from 'gatsby';

interface Props {
  title: string;
}

interface State {
  mainMenuClass: string;
  showMenu?: boolean;
}

class Header extends React.Component<Props, State> {
  state = {
    mainMenuClass: 'main_menu home_menu',
    showMenu: undefined,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const top = window.scrollY + 1;
    const mainMenuClass = top > 50 ? 'main_menu home_menu menu_fixed animated fadeInDown' : 'main_menu home_menu';

    // console.log({top, mainMenuClass});
    if (this.state.mainMenuClass !== mainMenuClass) {
      this.setState({
        mainMenuClass,
      });
    }
  };

  render() {
    const title = this.props.title;
    let navbarClass = 'collapse navbar-collapse main-menu-item justify-content-end';
    if (this.state.showMenu != null) {
      navbarClass =
        this.state.showMenu === true
          ? 'collapse animated fadeIn show navbar-collapse main-menu-item justify-content-end'
          : 'collapse animated fadeOut navbar-collapse main-menu-item justify-content-end';
    }

    return (
      <header className={this.state.mainMenuClass}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-12'>
              <nav className='navbar navbar-expand-lg navbar-light'>
                <Link className='navbar-brand' to='/'>
                  <img src='/paks-images/PAKS-Logo.png' title={title} alt={title} />
                </Link>
                <button
                  className='navbar-toggler'
                  type='button'
                  onClick={() => this.setState({ showMenu: this.state.showMenu === true ? false : true })}
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='ti-menu'></span>
                </button>

                <div className={navbarClass} id='navbarSupportedContent'>
                  <ul className='navbar-nav align-items-center'>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/'>
                        Home
                      </Link>
                    </li>
                    {/* <li className='nav-item'>
                      <Link className='nav-link' to='/about'>
                        About
                      </Link>
                    </li> */}
                    {/* <li className='nav-item'>
                  <Link className='nav-link' to='/services'>Services</Link>
                </li> */}
                    {/* <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='blog.html'
                    id='navbarDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Pages
                  </a>
                  <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <a className='dropdown-item' href='project.html'>
                      project
                    </a>
                    <a className='dropdown-item' href='project_details.html'>
                      project details
                    </a>
                    <a className='dropdown-item' href='single-blog.html'>
                      Single blog
                    </a>
                    <a className='dropdown-item' href='elements.html'>
                      Elements
                    </a>
                  </div>
                </li> */}
                    <li className='nav-item'>
                      <Link className='nav-link' to='/contact'>
                        Contact us
                      </Link>
                    </li>
                    {/* <li className="d-none d-lg-block">
                      <a className="btn_1" href="#">
                        Get a Quote
                      </a>
                    </li> */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
