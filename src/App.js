import React from 'react';
import { Link, Element, Events, scrollSpy, scroller } from 'react-scroll';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

class App extends React.Component {
    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log('begin', arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log('end', arguments);
        });

        scrollSpy.update();
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <Element name="home">
                    <Header />
                </Element>
                <Element name="about">
                    <About />
                </Element>
                <Element name="projects">
                    <Projects />
                </Element>
                <Element name="contact">
                    <Contact />
                </Element>
            </div>
        );
    }
}

export default App;
