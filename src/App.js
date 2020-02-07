import React, { Component, useState } from 'react';
import './App.css';
import data from './data.json';
import Result from './Result';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";



class App extends Component {
  /* id password state값 으로 정의 */
  state = {
    sub1: '', sub2: '', sub3: '', sub4: '', sub5: '', sub6: '', sub7: '', sub8: '', grade: '1학년',
    res1: 'default', res2: 'default', res3: 'default', res4: 'default', res5: 'default', res6: 'default', res7: 'default', res8: 'default',
    subName1 :'', subName2 :'', subName3 :'', subName4 :'', subName5 :'', subName6 :'', subName7 :'', subName8 :'',
    isActive1: false, isActive2: false, isActive3: false, isActive4: false, isActive5: false, isActive6: false, isActive7: false, isActive8: false
  }
  /* input value 변경 ==> onChange */
  appChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  /* 로그인 버튼 클릭 ==> onClick */
  appClick = async () => {
    console.log(` sub1 : ${this.state.sub1}\n sub2 : ${this.state.sub2}\n sub3 : ${this.state.sub3}\n sub4 : ${this.state.sub4}\n sub5 : ${this.state.sub5}\n sub6 : ${this.state.sub6}\n sub7 : ${this.state.sub7}\n sub8 : ${this.state.sub8}`);
    console.log(` \n grade: ${this.state.grade}`)
    this.checkResult()
    setTimeout(this.getResultWindow(), 1000)
  }

  appKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.appClick();
    }
  }

   getResultWindow = () => {
    this.setState({isActive: true});  
  };

  calcGradeQuota = async (grade, course) => {
    switch(grade){
      case '1': return course.quota1;
      case '2': return course.quota2; 
      case '3': return course.quota3; 
      case '4': return course.quota4;
      default: break;
    }
  }

  calcGradeReg = async (grade, course) => {
    switch(grade){
      case '1': return course.reg1;
      case '2': return course.reg2; 
      case '3': return course.reg3; 
      case '4': return course.reg4;
      default: break;
    }
  }

  checkForSub = async (course, grade) => {
    let gradeQuota = await this.calcGradeQuota(grade, course)
    let gradeReg = await this.calcGradeReg(grade, course)

    if(gradeQuota == "none")
      if(course.reg <= course.quota)  return 'true'
      else  return 'false'
    else
      if(gradeReg <= gradeQuota)  return 'true'
      else  return 'false'
    
  }


  checkResult = async () => {
    const { sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, grade} = this.state;
    
    data.map(course =>{
      switch(course.courseNum){
        case sub1 : this.checkForSub(course, grade[0]).then((result) => {
          this.setState({isActive1:true})
          if(result == 'true')
          this.setState({res1: '수강희망 성공', subName1: course.courseName});  
        else
          this.setState({res1: '정원 초과', subName1: course.courseName});
        }); break;
        case sub2 : this.checkForSub(course, grade[0]).then((result) => {
          this.setState({isActive2:true})
          if(result == 'true')
            this.setState({res2: '수강희망 성공', subName2: course.courseName});
          else
            this.setState({res2: '정원 초과', subName2: course.courseName});
        }); break;
        case sub3 : this.checkForSub(course, grade[0]).then((result) => {
          this.setState({isActive3:true})
          if(result == 'true')
            this.setState({res3: '수강희망 성공', subName3: course.courseName});
          else
            this.setState({res3: '정원 초과', subName3: course.courseName});
        }); break;
        case sub4 : this.checkForSub(course, grade[0]).then((result) => {
          this.setState({isActive4:true})
          if(result == 'true')
            this.setState({res4: '수강희망 성공', subName4: course.courseName});
          else
            this.setState({res4: '정원 초과', subName4: course.courseName});
        }); break;
        case sub5 : this.checkForSub(course, grade[0]).then((result) => {
          this.setState({isActive5:true})
          if(result == 'true')
            this.setState({res5: '수강희망 성공', subName5: course.courseName});
          else
            this.setState({res5: '정원 초과', subName5: course.courseName});
        }); break;
        case sub6 : this.checkForSub(course, grade[0]).then((result) => {
          this.setState({isActive6:true})
          if(result == 'true')
            this.setState({res6: '수강희망 성공', subName6: course.courseName});
          else
            this.setState({res6: '정원 초과', subName6: course.courseName});
        }); break;
        case sub7 : this.checkForSub(course, grade[0]).then((result) => {
          this.setState({isActive7:true})
          if(result == 'true')
            this.setState({res7: '수강희망 성공', subName7: course.courseName});
          else
            this.setState({res7: '정원 초과', subName7: course.courseName});
        }); break;
        case sub8 : this.checkForSub(course, grade[0]).then((result) => {
          this.setState({isActive8:true})
          if(result == 'true')
            this.setState({res8: '수강희망 성공', subName8: course.courseName});
          else
            this.setState({res8: '정원 초과', subName8: course.courseName});
        }); break;
        default : break;
      }
    })

  }


  render() {
    const { sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, grade} = this.state;
    const { appChange, appClick, appKeyPress} = this;
    return (
      <div className="App">
        <header className="App-header">
        <h1>고려대학교 수강희망 결과 확인</h1>
        <div>
        <font size="3">학년 선택:</font>
        <select name="grade" value={this.state.value} onChange={appChange}>
            <option value="1학년">1학년</option>
            <option value="2학년">2학년</option>
            <option value="3학년">3학년</option>
            <option value="4학년">4학년</option>
        </select>
        </div>

          <div>
            과목 1:
            <input type="text" name="sub1" placeholder="COSE312-00" value={sub1} onChange={appChange} appKeyPress={appKeyPress} />
            <div>
            {this.state.isActive1 && `\n ${this.state.sub1} ${this.state.subName1} 수강희망 결과 : ${this.state.res1}`}
            </div>
          </div>
          <div>
            과목 2: 
            <input type="text" name="sub2" placeholder="COSE312-00" value={sub2} onChange={appChange} appKeyPress={appKeyPress} />
            <div>
            {this.state.isActive2 && `\n ${this.state.sub2} ${this.state.subName2} 수강희망 결과 : ${this.state.res2}`}
            </div>
          </div>
          <div>
            과목 3: 
            <input type="text" name="sub3" placeholder="COSE312-00" value={sub3} onChange={appChange} appKeyPress={appKeyPress} />
            <div>
            {this.state.isActive3 && `\n ${this.state.sub3} ${this.state.subName3} 수강희망 결과 : ${this.state.res3}`}
            </div>
          </div>
          <div>
            과목 4: 
            <input type="text" name="sub4" placeholder="COSE312-00" value={sub4} onChange={appChange} appKeyPress={appKeyPress} />
            <div>{this.state.isActive4 && `\n ${this.state.sub4} ${this.state.subName4} 수강희망 결과 : ${this.state.res4}`}</div>
          </div>
          <div>
            과목 5: 
            <input type="text" name="sub5" placeholder="COSE312-00" value={sub5} onChange={appChange} appKeyPress={appKeyPress} />
            <div>{this.state.isActive5 && `\n ${this.state.sub5} ${this.state.subName5} 수강희망 결과 : ${this.state.res5}`}</div>
          </div>
          <div>
            과목 6: 
            <input type="text" name="sub6" placeholder="COSE312-00" value={sub6} onChange={appChange} appKeyPress={appKeyPress} />
            <div>{this.state.isActive6 && `\n ${this.state.sub6} ${this.state.subName6} 수강희망 결과 : ${this.state.res6}`}</div>
          </div>
          

          <button onClick={appClick}>수강희망 결과 조회하기</button>


          
          <pre>
            <font size='7'>사용방법</font><br></br>
            1. 학수번호 형식에 맞춰 학수번호 영문 대문자로 입력(ex. COSE312-00)
            <br></br>
            2. 수강희망 결과 조회하기 버튼 클릭
            <br></br>
            <font size ="3">버그 신고 : john0469@korea.ac.kr</font>
            <br></br>
            <font size ="3">허락 하에 김류빈(martinok1103@korea.ac.kr) 학우의 수강희망 현황 자료를 사용하였습니다</font>
            <br></br>
            <font size ="3">Academic English, 자유정의진리, 1학년세미나 및 일부 과목은 수강신청 사이트에 정보가 없어 조회 불가능합니다</font>


            
          </pre>

          
          
          
        </header>
      </div>
    );
  }
}

export default App;
