[Reflection.Assembly]::LoadWithPartialName("System.Drawing") > $null

$src = "C:\workspace\lp_test\lp_1\pic\icon\LINE_logo.svg.png"
$dest = "c:\workspace\lp_test\lp_1\lp-app\public\pic\icon\line_logo.jpg"

$img = [System.Drawing.Image]::FromFile($src)
$newWidth = 120
$newHeight = [Math]::Floor($img.Height * ($newWidth / $img.Width))

$resized = New-Object System.Drawing.Bitmap $newWidth, $newHeight
$gr = [System.Drawing.Graphics]::FromImage($resized)
# Fix for transparent PNG to JPG -> make background white
$gr.Clear([System.Drawing.Color]::White)
$gr.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gr.DrawImage($img, 0, 0, $newWidth, $newHeight)

$resized.Save($dest, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$gr.Dispose()
$img.Dispose()
$resized.Dispose()
