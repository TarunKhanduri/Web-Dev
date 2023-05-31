    <?php
    $myfile = fopen("000_EndSem/004/webdictionary.txt", "r") or die("Unable to open file!");
    echo fread($myfile,filesize("000_EndSem/004/webdictionary.txt"));
    fclose($myfile);
    ?>