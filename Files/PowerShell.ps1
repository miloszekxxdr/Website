$exeUrl = "https://yourwebsite.com/path/to/script.exe"
$localPath = "$env:TEMP\script.exe"

Invoke-WebRequest -Uri $exeUrl -OutFile $localPath
Start-Process -FilePath $localPath -Wait
