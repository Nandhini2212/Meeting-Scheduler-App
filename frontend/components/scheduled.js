export default function Scheduled(){
    return (
    
    <div className='meeting-info-div'>
        <div className='service-name'>Education</div>
        <div className='booked-time'>Time: 12:00AM - 12:30AM</div>
        <div className='participant-profile'>
            <div className='participant-profile-pic'><img className='participant-profile-pic' src={require("../photo/participant-profile.png")} alt="pic not found" /></div>
            <div className='participant-name'>ANONYMOUS</div>
            <div className='user-choices'> 
                    <div className='user-reschedule'>reschedule</div>
                    <div className='user-cancel'>cancel</div>
            </div>

        </div>
    </div>
)
}
