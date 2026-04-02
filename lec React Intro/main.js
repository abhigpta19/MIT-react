// // // const heading = document.createElement('h1');
// // // heading.innerText = "hello";
// // // const root = document.getElementById('root');
// // // root.appendChild(heading);

// // // const DOMroot = document.getElementById('root');
// // // const root = ReactDOM.createRoot(DOMroot);

// // // const div = (<div className="parent">
// // //         <div id="child1">
// // //             <h1>hello</h1>
// // //         </div>
// // //         <div id="child2">
// // //             <p>this is a paragraph</p>
// // //             <h2>this is a heading   </h2>
// // //         </div>
// // //     </div>);


// // const div1 = React.createElement('div' , {id:"child1"}, 
// //         React.createElement('h1', null, 'hello')
// //     );

// // // const div2 = React.createElement('div' , {id:"child2"},
// // //         [
// // //             React.createElement('p', null, 'this is a paragraph'),
// // //             React.createElement('h2', null, 'this is a heading')
// // //         ]
// // //     );

// //     //JSX

// //     // const div = React.createElement('div', {className:"parent"}, [div1,div2]);

    





// // // const h1 = React.createElement('h1', null, 'hello');
// // // const p = React.createElement('p', null, 'this is a paragraph');
// // // const div = React.createElement('div', null, [h1,p]);

// // function Header(){
// //     const Header = <div>
// //     <h1>Header</h1>
// // </div>

// // return Header;
// // }

// // function Content(){
// //     const Content = <div>
// //     <h2>Content</h2>
// // </div>

// // return Content;
// // }

// // function Footer(){
// //     const Footer = <div>
// //     <h3>Footer</h3>
// // </div>

// // return Footer;
// // }




// // const val = 10;

// // const page = <div>
// //     <Header/>
// //     <Content/>
// //     <Footer/>
// // </div>

// // const root = ReactDOM.createRoot(document.getElementById('root'));

// // root.render(page);

// function Element(){
//     const element = React.createElement('div',{id: "parent"},
//     React.createElement('h1',{},'hello')
// );

// return element;
// }


// // const element = React.createElement('div',{id: "parent"},
// //     React.createElement('h1',{},'hello')
// // );

// // Components--> class ,functional
// //react hooks




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Element/>);





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);