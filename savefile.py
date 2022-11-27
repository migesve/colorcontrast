
<!--: spam
Content-Type: text/html

<body bgcolor="#f0f0f8"><font color="#f0f0f8" size="-5"> -->
<body bgcolor="#f0f0f8"><font color="#f0f0f8" size="-5"> --> -->
</font> </font> </font> </script> </object> </blockquote> </pre>
</table> </table> </table> </table> </table> </font> </font> </font><body bgcolor="#f0f0f8">
<table width="100%" cellspacing=0 cellpadding=2 border=0 summary="heading">
<tr bgcolor="#6622aa">
<td valign=bottom>&nbsp;<br>
<font color="#ffffff" face="helvetica, arial">&nbsp;<br><big><big><strong>NameError</strong></big></big></font></td
><td align=right valign=bottom
><font color="#ffffff" face="helvetica, arial">Python 3.10.8: /usr/bin/python3<br>Thu Nov  3 16:11:13 2022</font></td></tr></table>
    
<p>A problem occurred in a Python script.  Here is the sequence of
function calls leading up to the error, in the order they occurred.</p>
<table width="100%" cellspacing=0 cellpadding=0 border=0>
<tr><td bgcolor="#d8bbff"><big>&nbsp;</big><a href="file:///home/rafael/public_html/m1-miashs-2022-s1/Dohw5OhT/savefile.py">/home/rafael/public_html/m1-miashs-2022-s1/Dohw5OhT/savefile.py</a> in <strong>&lt;module&gt;</strong></td></tr>
<tr><td><font color="#909090"><tt>&nbsp;&nbsp;<small>&nbsp;&nbsp;&nbsp;22</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os.system&nbsp;('unzip&nbsp;-x&nbsp;-o&nbsp;-qq&nbsp;{}'.format&nbsp;(fn))<br>
</tt></font></td></tr>
<tr><td><font color="#909090"><tt>&nbsp;&nbsp;<small>&nbsp;&nbsp;&nbsp;23</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os.system&nbsp;('rm&nbsp;-f&nbsp;{}'.format&nbsp;(fn))<br>
</tt></font></td></tr>
<tr><td><font color="#909090"><tt>&nbsp;&nbsp;<small>&nbsp;&nbsp;&nbsp;24</small>&nbsp;<br>
</tt></font></td></tr>
<tr><td><font color="#909090"><tt>&nbsp;&nbsp;<small>&nbsp;&nbsp;&nbsp;25</small>&nbsp;print&nbsp;("Content-type:text/html\r\n\r\n")<br>
</tt></font></td></tr>
<tr><td bgcolor="#ffccee"><tt>=&gt;<small>&nbsp;&nbsp;&nbsp;26</small>&nbsp;print&nbsp;('&lt;html&gt;&lt;body&gt;The&nbsp;file&nbsp;'&nbsp;+&nbsp;fn&nbsp;+&nbsp;'&nbsp;has&nbsp;been&nbsp;uploaded&nbsp;correctly.&lt;/body&gt;&lt;/html&gt;')<br>
</tt></td></tr>
<tr><td><small><font color="#909090"><em>builtin</em> <strong>print</strong>&nbsp;= &lt;built-in function print&gt;, fn <em>undefined</em></font></small></td></tr></table><p><strong>NameError</strong>: name 'fn' is not defined
<br><tt><small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>&nbsp;</tt>args&nbsp;=
("name 'fn' is not defined",)
<br><tt><small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>&nbsp;</tt>name&nbsp;=
'fn'
<br><tt><small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small>&nbsp;</tt>with_traceback&nbsp;=
&lt;built-in method with_traceback of NameError object&gt;


<!-- The above is a description of an error in a Python program, formatted
     for a web browser because the 'cgitb' module was enabled.  In case you
     are not reading this in a web browser, here is the original traceback:

Traceback (most recent call last):
  File "/home/rafael/public_html/m1-miashs-2022-s1/Dohw5OhT/savefile.py", line 26, in &lt;module&gt;
    print ('&lt;html&gt;&lt;body&gt;The file ' + fn + ' has been uploaded correctly.&lt;/body&gt;&lt;/html&gt;')
NameError: name 'fn' is not defined

-->

