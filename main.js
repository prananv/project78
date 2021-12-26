var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.pinimg.com/originals/d5/6c/d2/d56cd25436d0d3f56ad2f143750f7455.png", "https://www.pngitem.com/pimgs/m/794-7947329_grandmother-clipart-animated-grandmother-animated-hd-png-download.png" , "https://t4.ftcdn.net/jpg/01/38/71/15/360_F_138711505_K9YfscnIghBdBE1MvQbgUGixdRNKEg2P.jpg", "https://www.seekpng.com/png/detail/270-2703114_questionnaire-for-smart-mom-cartoon.png", "https://thumbs.dreamstime.com/b/teenage-cute-boy-isolated-white-background-vector-cartoon-illustration-vector-cartoon-illustration-teenage-boy-182166648.jpg", "https://thumbs.dreamstime.com/b/cute-boy-cartoon-illustration-90163697.jpg"];
var names = ["Family Book","Dandapani V","Padmini D", "Baskar Dandapani","Niranjani Baskar","Sandeep Baskar","Pranav Baskar"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
