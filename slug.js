    function myFunction() {
        var a = document.getElementById("slug-source").value;

        var b = a
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");

        document.getElementById("slug-target").value = b;

        document.getElementById("slug-target-span").innerHTML = b;
    }
  
  	function copy_text() {
        document.getElementById("slug-target").select();
        document.execCommand("copy");
        alert("Text copied successfully");
    }
