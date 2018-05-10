import React, { Component } from 'react';

class ViewProfile extends Component {
    constructor(props) {
        super(props);
        this.state =
        {

        };
    }

    componentDidMount() {

    }


    render() {
        let v = this.props.visitor;
        let f=v.f_name;

        return [
          <div className='viewcontainer'>
            <h2 align='left'>Profile</h2>
            <form name='profile' action='/editprofile' method='post'>
              <table border='0' class='profiletable' align='left'>
                <tr>
                  <td width='215'><label>First Name<br/>
                    <input type="text" name='f_name' size='26' ref={this.props.visitor.f_name}/>
                  </label></td>
                  <td><label>Last Name<br/>
                    <input type="text" name='l_name' placeholder={v.l_name} size='26' required/>
                  </label></td>
                </tr>
                <tr>
                  <td colspan='2'><label>Address<br/>
                    <input type="text" name='address' placeholder={v.address} size='60' required/>
                  </label></td>
                </tr>
                <tr>
                  <td colspan='2'><label>Phone Number<br/>
                    <input type="text" name='phoneNum' size='35' value={v.phoneNum}/>
                  </label></td>
                </tr>
                <tr>
                  <td style={{paddingTop:'40px'}}><label>Card Number<br/>
                    <input type="text" name='cardnum' size='26'/>
                  </label></td>
                  <td style={{paddingTop:'40px'}}><label>Exp Date(mm/yy)<br/>
                    <input type="text" name='exp' size='17'/>
                  </label></td>
                </tr>
                <tr>
                  <td><label>CCV<br/>
                    <input type="text" name='ccv' size='3'/>
                  </label></td>
                </tr>
                <tr>
                  <td colspan='2' valign='bottom' align='right' height='30px'>
                    <input name='submit' type="submit" value='Save Changes'/>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        ];
    }
}

export default ViewProfile;
