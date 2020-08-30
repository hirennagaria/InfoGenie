export interface Employee {
  empId: string;
  name: string;
  designation: string;
  email: string;
  phone: string;
  revealed: boolean;
  icon: string;
}

export let EMPLOYEES = [
	{empId: "1", name: "Hiren Nagaria", designation: "Founder & CEO", email: "hirennagaria@yahoo.co.in", phone: "9664247717", revealed: false, icon:"https://media-exp1.licdn.com/dms/image/C4E03AQEe227QYrwuaA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=h-6X9JxsM0Ep72O4RmkFXhPcDgRFm3V6U0sk5HbI0iI"},
	{empId: "2", name: "Avni Savla", designation: "Managing Director", email: "avni.savla@gmail.com", phone: "9664247658", revealed: false, icon:"https://pbs.twimg.com/profile_images/932928475140259841/SJyNxs5__400x400.jpg"},
	{empId: "3", name: "Hardik Wadher", designation: "CTO", email: "hardik.wadher@gmail.com", phone: "9664247659", revealed: false, icon:"https://media-exp1.licdn.com/dms/image/C5103AQGANqt48Fdxiw/profile-displayphoto-shrink_100_100/0?e=1601510400&v=beta&t=GMFFvkeeDZT8uw2aioZCVJ58TPb_A9etN0Ta-2m9c30"},
	{empId: "4", name: "Alex Smith", designation: "Software Developer", email: "alex.smith@gmail.com", phone: "9664247660", revealed: false, icon:"https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/8416.png"},
	{empId: "5", name: "John Doe", designation: "Tester", email: "john.doe@yahoo.co.in", phone: "9664247661", revealed: false, icon:"https://hewalounge.com/files/cto_layout/img/placeholder/team_1.jpg"},
	{empId: "6", name: "Jane Doe", designation: "Business Analyst", email: "jane.doe@yahoo.co.in", phone: "9664247662", revealed: false, icon:"https://littleconstruction.net/wp-content/uploads/2019/04/person-placeholder-300x275.jpg"},
	{empId: "7", name: "Vijay Deenanath Chauhan", designation: "Gangster", email: "poora.naam@yahoo.co.in", phone: "9664247663", revealed: false, icon:"https://www.thestatesman.com/wp-content/uploads/2017/08/1502192608-5.jpg"},
	{empId: "8", name: "Raj Malhotra", designation: "Lover", email: "naam.to.suna.hoga@yahoo.co.in", phone: "9664247664", revealed: false, icon:"https://www.yashrajfilms.com/images/default-source/Movies/Dilwale-Dulhania-Le-Jayenge/Dilwale-Dulhania-Le-Jayenge-Gallery/shahrukh-khan-in-dilwale-dulhania-le-jayenge.jpg?sfvrsn=2"},
	{empId: "9", name: "Anjali Sharma", designation: "Teacher", email: "tussi.ja.rahe.ho@tussi.na.jao.com", phone: "9664247665", revealed: false, icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaOqXiJ6l4giLGuraLkaXKjLgeeBUzMAl-5g&usqp=CAU"},
	{empId: "10", name: "Prem", designation: "Slingshot Thrower", email: "deewana.devar@gmail.com", phone: "9664247666", revealed: false, icon:"https://i.pinimg.com/originals/a0/64/a6/a064a647a3e45331f3a912c048901e90.jpg"},
	{empId: "11", name: "Chatur Silencer", designation: "Balatkari", email: "tum.rounge@mai.hasunga.com", phone: "9664247667", revealed: false, icon:"https://m.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/12/24/Pictures/_800476ba-264c-11ea-ad03-eca33bb5cdbf.JPG"}

];

export interface SearchEmployee {
  empId: string;
  name: string;
}