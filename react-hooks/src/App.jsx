// import React, { useEffect,useRef, useState } from 'react'

// function App() {

//   let [startTime, setStartTime] = useState(0);

//   let intervalId = useRef(null);

//   function startTimer(){
//     intervalId.current = setInterval(function(){
//       setStartTime((prev) => prev + 1);
//     },1000);
//   }

//   function stopTimer(){
//     clearInterval(intervalId.current);
//   }

//   function resetTimer(){
//     setStartTime(0);
//     stopTimer();
//   }

//   return (
//     <div>
//       <h1>{Math.floor(startTime/60)} : {startTime%60}</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   )
// }

// export default App




// import React from 'react'

// function App() {

//   const divRef = React.useRef(null);

//   function changeBackCol(color)
//   {
//     console.log(divRef.current);
//     divRef.current.style.backgroundColor = color;
//   }

//   return (
//     <div>
//       <div ref={divRef} style={{ padding: '20px' , border: '1px solid black' , margin: '20px'}}>
//         <h1>Hello, World!</h1>
//         <p>This is a simple React app. </p>
//       </div>
//       <button onClick={()=>changeBackCol("red")}>Click Me</button>
//     </div>
//   )
// }

// export default App



// import React,{useRef} from 'react'

// function App() {
//   const catRef = useRef(null);
//   const dogRef = useRef(null);
//   const owlRef = useRef(null);

//   function handleAllign(animalRef)
//   {
//     animalRef.current.scrollIntoView({
//       behavior : "smooth",
//       block: "center"
//     });
//   }

//   return (
//     <div>
//       <div style={styles.container}>
//         <button style={styles.buttons} onClick={()=>handleAllign(catRef)}>Cat</button>
//         <button style={styles.buttons} onClick={()=>handleAllign(dogRef)}>Dog</button>
//         <button style={styles.buttons} onClick={()=>handleAllign(owlRef)}>Owl</button>
//       </div>

//       <div style={styles.scrollBox}>
//         <img 
//         ref={catRef}
//         style={styles.image}
//         src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFRUXFRcYGBgVFxcVFxcXFRUXGBUXFxYYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGC0dHR0tLS0tLS0tLS0tKy0tLS0rLS0tLS0tLSstLS0tLS0tLTctLS03LS0rLS03Ny03NzcrK//AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EADwQAAEDAgQDBgQEBQQCAwAAAAEAAhEDIQQSMUEFUWEGEyJxgZEyobHwQsHR4SNSYpLxFBVyggckU2Oy/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAHxEBAQEBAAMBAAMBAAAAAAAAAAERAhIhMQMTIkFx/9oADAMBAAIRAxEAPwCXx3iVSrRp1GuyAkte1pgSNL+hVRhWO7t0yIIcDppyKJwY99TrUWiTGZv/ACH+ArPgPAazQTW/htcNJ8V97LxZz13lepeuedjQ8C7TmvRdh6kOeWENdqSAPxczpdZvD9m6+IuGGk3cv066mQehn0Vv/u+Ewh/gMNWqB8bomertSqniHaatWMOqZBrlb8PqRcfNdPXE6k8veOed+Nvh61YYTDYTh7s7nmrWjQaX/JVvEO2VZ0MotbRbOgAvHOFBdTeJa9ksddhm0nk78J89dwVHxPCHXJcI2O46EDQ9f8C+f6zIjq7do3dWzuJdmJu45iM0WJP8pDT1EG0whYui92R55ZXA82H5eEs9QV3D1GNhhdZ0C+x/A70OvQlFp1g4PDgdZI5PbIePOWgR/wDYEBG7idDA+i617gY+Jo081JquGXKw+E/UlMbhHkC3sl/03BiM0wN7qzkQGtvGoOqr6uBLcoYHXsTzMxIT6NaIN+V9VNmnzco9ekSZsI3UJ2FaRm2vN1OdjJaQGbRKgMYHGPpv9ynzLPo6qZgMICM0zs0AT4j8M9Br7c1KwuLIaSXTlENPQT4j1MOI/cLtGiGgwbNEQPxONnQd+UjbKdlHpUZJBNtXEaawY6SA0D+hKzR5YH3r3ydANSdB+p6KRh6NNreU31uTzd+mg+ZBVguyg+EaDnOp6kpmKg2Lg0DY3d7DQ9CQlhaDRpZpM6HdSS1s/oj8Pw0xDZbN8x18gNPconFahpRAF9IAB94lHl7OT0hNwhfpoi1+Hlu82QRWqwCSY6kp4xBMyblPaXoJtYt8TZad4lJdY6Dp7pKiWVXtE2k3JhaLaY0zES5LhWLe8vqVC5xDCb6HyCoCSILTPMFbrsVgDWLifDDfPVL3fUF9e68/FbxX32GisRh6dnDkJlSePcKdTqPbHwuNwNp2UbDNsd5t9hMpRATOQucGvPhdyPLyPIptZtNgnMGvuDPwdZBsAf7fJReJu7oS5xyxpuD5Qslxbir6rgb5dm6TGubzke6qc6dq14ti2MDiASWEB4/+PNBab3LCTZ3UA7F0jCY01WtqMsXCOjardCR/0Dj/AE4cbuVHwKm+pDR4okNJEw0/E1zfx0zJlm0kggjxa/h3Bu6bla0ZquYtBOdrX92CGE2kGB4ouOUwtvGRHlVa3CObLgS1rgC1p1a0kx1kNM+hWi4TjXvYMoE5gYIsA5xMfNTMBwttYS+QS0tM6zMydpv8yNldYbhbKQGQfcQFFkVFZxLC1KmHbkOR4JP1+U3WGxlSq0PfJgNqujqMpbtycvVqrhCzPaHh8UXFomXCfJzjMe4U8mwWJ49VY1wtIJk7yHlp+Y+ag4LiNVrnvBP8NsgC81HEMpNjc5nB0cmFXXE+zpbDoknM7/l4S9o6y7L81V9naIDzniGVM8k2LmUyaZJ2ADq755tatZzKnWkw/EqjC2jLTlEOcSAA8DPiKhP8lJjmif5nDkVLw3FaVaTTdFMGLiCSG8jq6ItsImJJOa4s8NY5pLmtc1r6xsH9yXF1GgLWqVX56rthrpZUzqr2uDqrxREeCi0EuY3UAMkZZmSXkE63Js+vzl+JnT0F7z+AZQd/xOB5nl0FvPVNbRJdBGypOHdpgIa5pf1c4SOsNA26nzWrwL+8Znb3ZA5F2byiZHqubqWNJlLBPdTBtIF+iDisUatoAA56pr6jhsR5GfcIdSkIHiudY5rPx96q0XJmbYOgeygXaZIjop+HxRb4bn6J+IfmAhotrKcuUYBhKmYxl9QkhkuafDaV1OlKl4zhLqJlzT57LTdnePMoN8bYkXjUqzc+bEAjqs/2p4U00u8pDK5tyNiN46qebl2HcsG49xplZ5LI8jqsli+PtwxMMa6p/UMzGTuRNz0lLC4jxtE3JFjv0WS7a946u6mxrnNzkZg05LHQO0kbrXib0i3IlY+q6rmq96XEmHNfAudr20IGUxIiIgKBgOBOrOBbNwSJ0gfM3gc4dzBUvs5wZzhlcHfUEbtg3ESdDud4n0/gPA2UmActzE3ifLSfOea6LZPiZ7V/Zzs+2kwEtGeSZgC558j1Fjqr2ngwJtv7ETBHLU+6lVq4aFXVMao8tVINSoBrvMqWaqpxi7yunElFmhLrusnOYHMg30+RChurWT2V7BT4mJxLAtqMgC7Zy9DBH6ey81PAalCu5uQuENI1IcTlOXnlJYwm9xTDfxr0b/UoZqNcZKc6spWaxPFuHPptZmc3vC7M57gIa4jx1Be77AD+UBo6rIYnBCq5xBcWgmXQSXHqTpt4QD66r1rjWEbVZ8IcYiHEtEciRtYLJ1cM3L4i0wIim2WDmA0265iHTfnK15qfjzwVXMdAlvLmZ5/pdaTgHaStgntdUnu3OIdAkRAMxOWdbRNiovFadEmwfmmJcIMdPER8h0ha3gPCqLmNFcMczSHEkSdBYG0xpr6pdWf6TTY99J4bUpvL2VACDM67a2I5bKpxFCHZWkH90qODZSeWU20wyfwtAHpZOrBrPM7rlv1oJToZfiN0RmEJd8URqq+tiHExqpXDQ8OMjXmpsVKWKHitskpdVouSdeaSXkeNeuOEgg6FCZVRSVAxgsfgu6rOFxeWkWIB3B2VxxnCB7G09QGgAnXnPneVZcR4b3tSm8EAtNz/AE6kedgj1cPmdmK35qVTwThIYBGmu8k7knc9Vb4vEhjfsLtZwaFlu0GNOVwFrW8yco9iQtPpSInE+04Di1rXOI1DdvMkgBV7O09/Ex0bkQ6PMNJPyWY7R4p7ctGkcrSC50auvYvO4191SYauWkXg7EWWkhXvLj1zAYxtVuZjgRzF1ObdYDgOL7vEUyLNrghw2zgfEOUx81v6aqGe5LMukJzaanr0Aah1+9f8Ks47xdmGpZ3dAANXO2AVxUpLzrtzWLq5B+GjTzR/U8EzHkB7lZ8+6d+BYrtniqlmspMGwcHOdfmZH0VVxHH4oEHESWO0IDct7iJBy+1+qrX03sPjkHWFq+yuMZWa7D1PExzTAOoJ3HK7g7zAWu5GO7VCMdYiXjaD+36Kbh+OOpAD8MbGDqTz0+7SVVcSoBuRzTY2PnlaR6eKPRdovBseQ+iVP/XqFOt34bUBJBGYSZmQi06EmTboVQdksaQe7LpbcjktK3GtLvRcve625MoU23Maek8kypUgSbR6oj6zZnOI5bqNl7x23qlBfXwZ+I05Li5Up7JJ+ML21bCpLHWQcspCyzaJIHhQqtSNEUHwqDiXrb8/jK/Qa7pBWT7UYZ5aXMEkZTH/ABIMesLTvchOYD1W2CV5RxeXTWpNzEtyO1zNAMmBudQQQfQqiw2FfUMBvnO36L1vH9m6NQk5S0nUsMT5zYqCOydMG/eO6Egf/kBVuTE3mWstgKGatRY0S2lcnbSACecx816ZhKRLR5KLgOFtYA1rQ0dOu6uaQAHlZCybhoEqR3ANwdVHzzf0XMOdio6PxExGGtZebdr8CW13PI8D2gE7NLQR4uQiL/RenNq6gqLXwbXgzcFRKHhWNwj80XdPuIFtdrKTw2maANR0Z3jKGzJgjpvp7dV6hX7KUXG7B6Oc35NIU3BcCoUjmbRYHfzHxO/udJ+avz9Yjwm68ixWAqeEOaW7+KQSTGgOtmhNp4LIfjE9TTge1TMCvZeJYBjwZEnyn6rzTi+Fc1xALhewJFxOghsfMrTmypsC4RUe14LjMG9516zC19RsbH6j5LHYOiWkNJFyPisf7g3z1hbwAsZzJCw/X1VczUWnQ0Lfv3XajS0zCJ/r4iGwmmrJ5DmFnNV6HwsuHxBJRq1Ug2t+a4nlpa22UhOBnVJj7kHp+ac1oPms/G5rTT3CGqqrOkq2YzVVFcXW35I6CKTU0lcE/YW8JIaV2AgsJ5J7ggCSFTcW4uKdnEgc9h5q0Y6fJQOKYZlQFpEiEYIj0+KB7QWODmwLgyuUcaZVD/tgo1WuEgXvzEHwnmL78lInM1zQSCbCLHaflKVjpkli6q8eY1zRMu3Dbn15LQYasHDlaeqzPBeHMogeET5AR5BX9OpItqFljLrB6n2P0THVBH38kocRceo1UTEHKLn5wkg6o8FYvtFSLXuIloNzs125kifmAtK7Exy9SP1CoOMYsk5YYbfzAH01I01V8X2ms1w5jnVWiGXcPhJn08WVekOtYgWEaCfks72N4YH4kPn4bxLjB0AmAHew9VquPsyknMPL7Cn9ZtPlTuwuZ06IL6GU6gqSMRN49kBr4cczSQVnNh3DX4gEXb0kWXE80QToknptg4w4Ag3kfKfyQcLX8WUm8kCRBtf6KY5+YeVwoDqQzh4MCZI1NxBCOfcwr6q1Yq3iNOHKwpAyJQ+I0pE8kvy9UVRFyYSiPCHH+V1Qj6Jui1XIDakaJPdKCDqP5lDfXASffRQMdSeBLU5TdxVSRoFX8HcLnfMRfzQa9eoR8J/L3QOHONMkOkgkm14nVGNZM5rTNrSjNeDt7FUxxpPwgxzKnUCTAKm4yW2ErwbPPr+6LxKS2R8XTX23VdTeLZj5H1g+xhCx+IJ8B2PhJ5gx6EG31WdgQ35/xCRP4gHCeUmfZQOIYFroJpNInS4/t1aD/wBVb0HunxAnaZh3935GVb4LChzgTce3uP0SlwsLspwwUmZrjNoC6SB5aBSO0dOW2APmrWBCreOTksJP3zRaMYsPc2RMX0Ck0S5xi6iuBaZuY1DrgeW4HkpeAqZnktOoiDrblz+7KOvhnmpBgpIjaXeHK1hJvpeYSTnwWtFScRdKoQ4wQI1uAddR7x7rjUqgFp00Prp9FlzcrTqLLC1CW6afkmvfNkPAgCY0Xay1jPFdiKd+ijPpKdiDKily25oA7opPGykZ/v6BDVAMJPZZdIXMycCur4MaoH+mVrWEhAp0OaKNqGyjeEQu8TQOaNWHJMw9K8nn9LqL7BtAEtM7GY5giHDoIlEFKRDhMRPONGvH9QEA8xHUo9ACR8+qM1kG21x1HL5/VTYA6NKI3Gx6feyt8C2AolNl+nJTaaihMF0LG0MzCnU3IrDdIPPuICJ84n/Kj0HyBz0Vx2jw5a+zdZvtHLr5KswjQZg5TuDf26fPz1RJg21dcB4y/DvLsocSIJIv9b6ef0SVXA5pI88Hg1bUZkaFCSD1g2TKNLKZGnJMrFPpPkJldafndZ9fUZxUeoN/ZHegvXTEgOMJrnIjgmuGqoBAroXF1UCJXE1y43RAccxcASlJo91AORgfl9Df6z7pjWojeRUdBJpgKQ1RKKNKgJjHo1M3UKm5SKbkBUdpzEGJB16rMtw0+Jod56EHr167/TV8fYDEp2D4xhaWDdTc3NVIcNJv+G+wFvZOTSvplZ3FiNR+YH5bfRIrqOY5m2sDrBbPXlf73SPEa1EpuZcDlx75XNWw1OqpLnSJVYCpmGfIhV+Xql044oTgi1ChFdjMJMATyU0lOAMhNKcQuOCsGQkxJzkwFIOubuEgOS4HJymg6mT5rrqnJclBfBPXmo6CTTf+6lgqFSbKksJUBJpORw5R6afmQFT2ixJaNdllDiJ1JjeFedo3ZtCQqTD0cpzEiN4CWyDNKlWLfFJ6GYKS5jWtNwd7fqktJZhWNmHSkSo4cnB5XG2Edolh65BQXOQyUp6uhbvKASh4StNkR7V28dbGVMKY5dK4VoDSmkp5QyrgNqBMCIU0BLA4nELhC60qaHdkBllJhCcFIFa4KRSKitCl0GKOgkOMNQHVYT8W6AAqHinEmsGUn1UyEq+K4rNU/f8AJRcVi5AaNN1Ee7PUncEGdiiV6cugawlk0a5ngDNMbJLpoNyiSc03nSNkk9htgXLoqLj0Irm1skF8qO6oUphDJUkc2oQZCu2uzNBHqs65yseG4uPCYjyW/wCVxPUS3tTIUlxQ11xAUJpYjwmOVwgC1IMT04IMFzUyEYobQooOKGEdjxeU3KFIcptlT6LVHZA0RqD5KzoReMVo0vA03WD41jwXQRK03aKpJdBgj72/NYjEPznYcvJOFUzhOIHiaWyToZg25J+JYM4IMHfoqyjLHTqR7Ixqvf67fulZ7G+sWX+pgwSHRvCSJhuHjIJdc+ySjy5Xla94QSpjmh4ln9u/pzURzVz1oGSmFFUeo4pgOqCmNcZT3FRqjoT0VfYTFhwibhG7xZuhiSDZXNDEBwnfddX59bGVmJYeuOKC1y73i3lSfK6CguenF1kzO3XDZcc6LplSpISwjy4FNfVA8/yQi4rhb98lOGOx6n4RkKFQYprHfJThML2mxTRVf4hMkRus1QeTrZTOOOD67j/M4qtY6HQlidFOthMlHw78rhGvL9EJrwbC8oFSQY3F/wDCPovr20NLHMiTtaySz/eyb68/JcU/xxX8legYXGkHVXDa7am8O58/P9VjKWJMwQWncOBB9irHD4g81F5lar6s0tMEXUVzZKLRxwfAcUSpZc/U8apX1lX1Vb1KJPKOZ0QBRYD4gXdNB+qNCne5Rm8VNF7dyTB8tvqrPG1szYDWtHIAD56rGdqQQGuB0P1XR+N9s+3pOHxbXiWmQiGovNuzHGjTIBNnETPVb7vLSN1t8RPaSagXHYsbqG9xhRKrlfkD63aBjamR1v3NvTVWGFxzHzlXm3a9pbUa/mInyROyfGCK+VxkPO+xJkJyp329Oa5OBUdjkQOTNKpOUHtDxLuaYAMF067BTMOJKxnbnHnvSwXAAHqFPQUjyXuJ1OsruVr26QbjrPVQcLjo1Cd/qCdDc+yzwbHcO4tPPop7wHwcsHbyUNtPRxtZTqVdrm6wQNEUIlHCZnG+nokpjv5hodfPmkleqc5jXYX/ANhjjUBy6NcYDiebSdk1uAaNMx83D8gm1MaxsNhxAtt+qljEAfgnzP7KI1RafhNm+5KntxxIiQPT9VDxr6mWadNh85J9NFQ/7hUzZXeE8oj/ACn1zL9LWoqVZ3kqDXxB5KDQxCnUcjj4iY/pj3us+vz/ANPVfWKqOM4bPScOhI8xcK9x2GLTrI2I35eSgvbKXPqlfbzelVIhb7shxnOO6efEBIJ3HJYfiVDJWe3rI8jdWPZuRXYRzXX1ma5+bZXpxCDUYusenkqJW2Mx2qwWek7m3xD0+yshwtv8an/zH1XpGNpAgg6EQsT2ewn/ALmWJDC75GArlZ9T29OoaBFCBRNkVrlcUnYe3iOwn2XlnaCq59dzrmSduq9Up0s1N4GuUryvG1hnLZ0OhS79J+qupTg80SmTa2imVaLcuca7qG13JT9TfSc9wLYJFkCm5oBmekIFZ/ROogEFLD1Ow1cXFzCSjto/1JIyHtbqlhI1MncqWwIDak6Jwa5TI2SaDyCuYvBMqjQZkwU4ErjKiBior4Bzfhv0Nj6FNw9YzEEc5ELQ1GB46jQ/kq6vRvlcIPP9CjE6Xezy8lDxGGi7dOSVQFmtxsf15KRSrSFN5ErAdraEVGvH4hB8wp3ZHA5nd5sLDzV32k4J39PwEBwMidD06LnZDCGnTyOaQ6TIKq9f1R4/2XtMIganGkkGFZytcRMUsn2acDjq3/b6ha7G07Fee8AxBbjGkfic5voSVryz6+vT2ItNqZTapeHYr5uUWLjhdOAF51/5H4CKNfvWjw1ZPQOGo9dV6TgxbkqH/wAk0G1ME4mJY5rm+8EexKq/2RmPIm1Dds2TqGsAWUYnxW0R8NVIMhSSSKQgyfZNokC2yZTrmb2vqk/pokfpIgOBg3Gx38kl3CsaWzJB90kjegUmQjBMaF1yluT3IITnJhKYFpuUhzWvEH33ChAo7CpKwCrTIs64+RVfXw2W40+iv7OEFQK7Mpg+/NXPcQgUK/VGFWDmtZRcVTYLx7Kn4xxZtJkTLiPCPzKz6m3D3GvFWU7OFjeAdpWlhFVwaWwJO/VSsT2opx/C8R5mwS8KPKJnajiHdUjB8RED1Xn2CrZKjX7tcD7FTOJ4p1V5c4z9B5KvLbraTIy6vt7Fw/EB7WuFw4Aj1VlQqgLyzs72jNCKb709ubf2WxwPHKNQS2oPWx+aWLnWthTrrK9vceHMFIGxu5Gx3GRSoufIJGl9ZWFxGNdULnv3Wnzkv9VlSgBomtpmwG6lVAXQ0enou0aToA6kyNRAWcTYiuYQN/VFomBJ0UmvPdnxWBB0vOmqVTIGCRJI57lUQVKvAMCxMpIrKAyi1yJ/ZJB69EXCkks3QY5Cdqkkih0IjUklNCQxFxDAaTpExcdEklUR0xHamq4UTBjQW81hKziTJJPmZSSV8/WXZUBJUihYmEkldREglJgSSUqMhdp/mkkmIM1x0kxHNHo1CQRNoSSS6OO1D8J6ooMObHVdSSAWMefCPP6odOs7KbpJJlThXcCL7fdkkkkE/9k=" 
//         alt="" 
//         />
//         <img 
//         ref ={dogRef}
//         style={styles.image}
//         src="data:image/jpeg;base64,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" 
//         alt="" 
//         />
//         <img 
//         ref={owlRef}
//         style={styles.image}
//         src="data:image/jpeg;base64,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" 
//         alt="" 
//         />
//       </div>
//     </div>
//   )
// }


// const styles = {
//   container: {
//     textAlign: "center",
//     fontFamily: "sans-serif",
//   },
//   buttons: {
//     marginBottom: "10px",
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//   },
//   scrollBox: {
//     height: "250px",
//     overflowY: "auto",
//     border: "1px solid #ccc",
//     padding: "10px",
//   },
//   image: {
//     display: "block",
//     margin: "20px auto",
//   },
// };

// export default App



// import React,{useRef} from 'react'

// function App() {

//   const [count, setCount] = React.useState(0);
//   const [id, setId] = useState(null);


//   function start(){
//     setId(setInterval(function(){
//         console.log("Interval called " + id);
//         setCount(prev=>prev+1);
//     },10));
//   }

//   function stop(){
//     clearInterval(id.current);
//     id.current = null;
//   }

//   function reseet()
//   {
//     stop();
//     setCount(0);
//   }




//   return (
//     <div>
//         <h1>{Math.floor(count/(60*100))}:{Math.floor((count/100)%60)}:{count%100}</h1>
//       <button onClick={stop}>Stop</button>
//       <button onClick={start}>Start</button>
//       <button onClick={reseet}>Reset</button>
//     </div>
//   )
// }

// export default App
 


//Hashing






// import React, { useState } from "react";

// function slowFunction(num) {
//   console.log("Running slow function...");
//   for (let i = 0; i < 1e9; i++) {} // simulate heavy work
//   return num * 2;
// }

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const result = slowFunction(count);

//   return (
//     <div>
//       <h2>Result: {result}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment Count
//       </button>

//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//       />
//     </div>
//   );
// }





// import React, { useState, useMemo } from "react";

// function slowFunction(num) {
//   console.log("Running slow function...");
//   for (let i = 0; i < 1e9; i++) {}
//   return num * 2;
// }

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const result = useMemo(() => {
//     return slowFunction(count);
//   }, [count]);

//   return (
//     <div>
//       <h2>Result: {result}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment Count
//       </button>

//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//       />
//     </div>
//   );
// }



// import React, { useState, useMemo } from "react";

// export default function App() {
//   const [search, setSearch] = useState("");
//   const [count, setCount] = useState(0);

//   const items = ["apple", "banana", "orange", "grape", "mango"];

//   const filteredItems = useMemo(() => {
//     console.log("Filtering...");
//     return items.filter((item) =>
//       item.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [search]);

//   return (
//     <div>
//       <input
//         placeholder="Search fruit"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <ul>
//         {filteredItems.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>

//       <button onClick={() => setCount(count + 1)}>
//         Re-render ({count})
//       </button>
//     </div>
//   );
// }




// import React, { useState } from "react";

// const Child = ({ items, handleClick }) => {
//   console.log("Child Rendered");
//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//       <ul>
//         {items.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default function App() {
//   const [count, setCount] = useState(0);

//   const items = ["apple", "banana", "orange"];

//   const handleClick = () => {
//     console.log("Clicked");
//   };

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Re-render Parent
//       </button>

//       <Child items={items} handleClick={handleClick} />
//     </div>
//   );
// }


// [] !== []   // true
// () => {} !== () => {} // true


// const Child = React.memo(({ items, handleClick }) => {
//   console.log("Child Rendered");
//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//       <ul>
//         {items.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// });




// import React, { useState, useMemo, useCallback } from "react";

// const Child = React.memo(({ items, handleClick }) => {
//   console.log("Child Rendered");
//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//       <ul>
//         {items.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// });

// export default function App() {
//   const [count, setCount] = useState(0);

//   const items = useMemo(() => {
//     return ["apple", "banana", "orange"];
//   }, []);

//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//   }, []);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>
//         Re-render Parent
//       </button>

//       <Child items={items} handleClick={handleClick} />
//     </div>
//   );
// }



// import React, { useState, useMemo, useCallback, useRef } from "react";

// // 🔥 Render Counter Hook
// function useRenderCount(name) {
//   const count = useRef(0);
//   count.current++;
//   console.log(`${name} rendered:`, count.current);
//   return count.current;
// }

// // 🔥 Child Component (List)
// const List = React.memo(({ items }) => {
//   const renders = useRenderCount("List");

//   return (
//     <div style={styles.box}>
//       <h3>List Component (renders: {renders})</h3>
//       {items.map((item, i) => (
//         <div key={i}>{item}</div>
//       ))}
//     </div>
//   );
// });

// // 🔥 Child Component (Button)
// const Button = React.memo(({ onClick }) => {
//   const renders = useRenderCount("Button");

//   return (
//     <div style={styles.box}>
//       <h3>Button Component (renders: {renders})</h3>
//       <button onClick={onClick}>Click Me</button>
//     </div>
//   );
// });

// export default function Hashing() {
//   const [count, setCount] = useState(0);
//   const [search, setSearch] = useState("");

//   const renders = useRenderCount("App");

//   // 🔥 Large Data (simulate heavy work)
// //   const data = useMemo(() => {
// //     console.log("Generating data...");
// //     return Array.from({ length: 100 }, (_, i) => `Item ${i}`);
// //   }, []);

// const data = () => {
//     console.log("Generating data...");
//     return Array.from({ length: 100 }, (_, i) => `Item ${i}`);
//   };

//   // ❌ Without useMemo → filtering runs every render
// //   const filteredItems = useMemo(() => {
// //     console.log("Filtering items...");
// //     return data.filter((item) =>
// //       item.toLowerCase().includes(search.toLowerCase())
// //     );
// //   }, [search, data]);

// const filteredItems = () => {
//     console.log("Filtering items...");
//     return data().filter((item) =>
//       item.toLowerCase().includes(search.toLowerCase())
//     );
//   };

// //   ❌ Without useCallback → new function each render
// //   const handleClick = useCallback(() => {
// //     console.log("Button clicked");
// //   }, []);

// const handleClick = ()=>{
//     console.log("button clicked")
// }

//   return (
//     <div style={styles.container}>
//       <h2>🔥 Ultimate React Optimization Demo</h2>
//       <h3>App renders: {renders}</h3>

//       {/* Search */}
//       <input
//         style={styles.input}
//         placeholder="Search..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Re-render trigger */}
//       <button onClick={() => setCount(count + 1)}>
//         Re-render App ({count})
//       </button>

//       <div style={styles.flex}>
//         <List items={filteredItems()} />
//         <Button onClick={handleClick} />
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "20px",
//     fontFamily: "sans-serif",
//   },
//   flex: {
//     display: "flex",
//     gap: "20px",
//     marginTop: "20px",
//   },
//   box: {
//     border: "1px solid #ccc",
//     padding: "10px",
//     width: "300px",
//   },
//   input: {
//     padding: "8px",
//     marginRight: "10px",
//   },
// };

import React,{useState, memo} from 'react'

const Child = memo(function({count1,setCount1})
{
    console.log("Child rendered")
    return (
        <div style={{border: '2px solid black' , padding: '10px', margin:'10px'}}>
            <h1>Count1 : {count1}</h1>
            <button onClick={()=>setCount1(count1+1)}>+</button>
        </div>
    )
});

function App() {

    console.log("App rendered");
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

  return (
    <div>
      <Child count1={count1} setCount1={setCount1}/>

      <h1>Count2 : {count2}</h1>
      <button onClick={()=>setCount2(count2+1)}>+</button>
    </div>
  )
}

export default App
