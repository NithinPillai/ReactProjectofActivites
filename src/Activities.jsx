const myAct = [
    {activityName: "TAMID", positionName: "Technical Consultant"}, 
    {activityName: "App Dev Club", positionName: "Bootcamp Member"}, 
    {activityName: "Club Volleyball", positionName: "Team Member"}, 
  ];

export default function myActivities(myActivities) {
    const act = myAct.map(myAct =>
        <li key={myAct.activityName}>
          <span className="activityName">{myAct.activityName}</span>: {myAct.positionName}
        </li>
      );

      return (
        <ul>{act}</ul>
      );
}