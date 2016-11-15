
const cleanPath = (str)=>{
  let dirtyPath = str;

  let dirtyPathArr = dirtyPath.split(';')
  // console.log(dirtyPathArr.length)
  let cleanPathObj = {};
  dirtyPathArr.forEach(function (item) {
    let key = item.toLowerCase();
    if (!cleanPathObj.hasOwnProperty(key)) {
      cleanPathObj[key] = item;
    }
  })
  // console.log(Object.keys(cleanPathObj).length)
  Object.keys(cleanPathObj).forEach(function(item) {
    // console.log(cleanPathObj[item]);
  })
  
  return Object.keys(cleanPathObj).map(function(item) {
    return cleanPathObj[item];
  }).join(';');
}

// cleanPath(String.raw`C:\Python35\Scripts\;C:\Python35\;C:\tools\ruby23\bin;C:\ProgramData\Oracle\Java\javapath;C:\Program Files (x86)\Common Files\Intel\Shared Files\cpp\bin\Intel64;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\Program Files (x86)\Common Files\Acronis\SnapAPI\;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\Program Files\Sublime Text 3\;C:\ProgramData\chocolatey\bin;C:\Users\mzvast\AppData\Local\Yarn\config\global\node_modules\.bin;C:\Users\mzvast\AppData\Roaming\nvm;C:\Program Files\nodejs;C:\tools\python2;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\Program Files (x86)\vim\vim74;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;C:\Program Files\Java\jdk1.8.0_112\bin;C:\Program Files\Git\cmd`)