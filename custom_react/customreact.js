function customRender(reactelement, container) {
    const domElement = document.createElement(reactelement.type);
    domElement.innerHTML = reactelement.children;
    // domElement.setAttribute('href', reactelement.props.href);
    // domElement.setAttribute('target', reactelement.props.target);

    for (const prop in reactelement.props) {
        if (prop == 'children') continue; 
        domElement.setAttribute(prop, reactelement.props[prop])
 
    }

    container.appendChild(domElement);
}

const reactelement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');
customRender(reactelement, mainContainer);
