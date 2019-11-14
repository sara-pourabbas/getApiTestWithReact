import React, { Component } from "react";
import { connect } from "react-redux";
import {Row,Col,Table,Button} from 'reactstrap';
import {GetListData} from "../redux/Actions";
import TableRow from "../components/TableRow";
import {Loading} from '../components/Loading';

class Home extends Component {
    componentDidMount(){
        this.props.GetListData();
        (!localStorage.getItem('Token')) && this.props.history.push('/login')
    }
    signOut=(e)=>{
        e.preventDefault();
        localStorage.removeItem('Token');
        this.props.history.push('/')
    };
    render() {
        return (
            <div className="animated fadeIn">
                <Row className='justify-content-center'>
                    <Col >
                        {this.props.dataList.loading ? <Loading/> :
                            <Table className='table-custom'>
                                <thead>
                                <tr>
                                    <th className='text-center' style={{width: 150}}>File Number</th>
                                    <th className='text-center' style={{width: 150}}>Submittion Date</th>
                                    <th className='text-center' style={{width: 150}}>submitter User</th>
                                    <th className='text-center' style={{width: 150}}>Inviter</th>
                                    <th className='text-center' style={{width: 150}}>Room Count</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.dataList.list.map((element, ind) => {
                                        return (
                                            <TableRow key={ind}
                                                      fileNumber={element.fileNumber}
                                                      submittionDate={element.submittionDate}
                                                      submitterUser={element.submitterUser.firstName}
                                                      inviter={element.inviter.lastName}
                                                      roomCount={element.roomCount}
                                            />


                                        )
                                    })
                                }
                                </tbody>
                            </Table>
                        }
                        <div >
                            <Button className='logout' onClick={e=>this.signOut(e)}> Logout </Button>
                        </div>
                    </Col>
                </Row>

            </div>
        );
    }
}

const mapStateToProps = state=>({
    dataList : state.DataListReducers
});
const mapDispatchToProps = dispatch=>({
    GetListData :()=>dispatch(GetListData())
});

export default connect (mapStateToProps,mapDispatchToProps)(Home);
