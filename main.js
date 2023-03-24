{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red129\green131\blue134;\red23\green23\blue23;\red255\green255\blue255;
\red164\green191\blue255;\red252\green115\blue96;\red117\green255\blue242;\red191\green98\blue181;\red254\green219\blue112;
}
{\*\expandedcolortbl;;\cssrgb\c57647\c58431\c59608;\cssrgb\c11765\c11765\c11765;\cssrgb\c100000\c100000\c100000;
\cssrgb\c70196\c80000\c100000;\cssrgb\c100000\c53725\c45098;\cssrgb\c51373\c100000\c96078;\cssrgb\c80000\c48235\c76078;\cssrgb\c100000\c87843\c51373;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 / Grab values from the submitted form in the URL\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const words\cf4 \strokec4  = \cf5 \strokec5 new\cf4 \strokec4  \cf6 \strokec6 URLSearchParams\cf4 \strokec4 (\cf6 \strokec6 window\cf4 \strokec4 .\cf7 \strokec7 location\cf4 \strokec4 .\cf7 \strokec7 search\cf4 \strokec4 );\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 // Cleans up and capitalizes the names of the animals\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 function cleanAndCap\cf4 \strokec4  (\cf5 \strokec5 str\cf4 \strokec4 )\{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 if\cf4 \strokec4 (!\cf6 \strokec6 str\cf4 \strokec4 ) \cf5 \strokec5 return\cf4 \strokec4  \cf8 \strokec8 null\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 let temp\cf4 \strokec4  = \cf6 \strokec6 str\cf4 \strokec4 .\cf7 \strokec7 trim\cf4 \strokec4 ()\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 temp\cf4 \strokec4 [\cf6 \strokec6 0\cf4 \strokec4 ].\cf7 \strokec7 toUpperCase\cf4 \strokec4 () + \cf6 \strokec6 temp\cf4 \strokec4 .\cf7 \strokec7 substring\cf4 \strokec4 (\cf6 \strokec6 1\cf4 \strokec4 )\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 // Assigning the variables with values used in the story\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const firstAnimal\cf4 \strokec4 = \cf6 \strokec6 cleanAndCap\cf4 \strokec4 (\cf6 \strokec6 words\cf4 \strokec4 .\cf7 \strokec7 get\cf4 \strokec4 (\cf9 \strokec9 'animal-1'\cf4 \strokec4 ));\cb1 \
\cf5 \cb3 \strokec5 const secondAnimal\cf4 \strokec4  = \cf6 \strokec6 cleanAndCap\cf4 \strokec4 (\cf6 \strokec6 words\cf4 \strokec4 .\cf7 \strokec7 get\cf4 \strokec4 (\cf9 \strokec9 'animal-2'\cf4 \strokec4 ));\cb1 \
\
\cf5 \cb3 \strokec5 const answer\cf4 \strokec4  = \cf6 \strokec6 cleanAndCap\cf4 \strokec4 (\cf6 \strokec6 words\cf4 \strokec4 .\cf7 \strokec7 get\cf4 \strokec4 (\cf9 \strokec9 'answer'\cf4 \strokec4 ));\cb1 \
\cf5 \cb3 \strokec5 const conjunction\cf4 \strokec4  = \cf6 \strokec6 answer\cf4 \strokec4  === \cf9 \strokec9 'Yes'\cf4 \strokec4  ? \cf9 \strokec9 'and'\cf4 \strokec4  : \cf9 \strokec9 'but'\cf4 \strokec4 ;\cb1 \
\
\cf5 \cb3 \strokec5 const speed\cf4 \strokec4  = \cf6 \strokec6 words\cf4 \strokec4 .\cf7 \strokec7 get\cf4 \strokec4 (\cf9 \strokec9 'speed'\cf4 \strokec4 );\cb1 \
\cf5 \cb3 \strokec5 const adj1\cf4 \strokec4  = \cf6 \strokec6 words\cf4 \strokec4 .\cf7 \strokec7 get\cf4 \strokec4 (\cf9 \strokec9 'adj-1'\cf4 \strokec4 );\cb1 \
\
\cf5 \cb3 \strokec5 const thirdAnimal\cf4 \strokec4  = \cf6 \strokec6 cleanAndCap\cf4 \strokec4 (\cf6 \strokec6 words\cf4 \strokec4 .\cf7 \strokec7 get\cf4 \strokec4 (\cf9 \strokec9 'animal-3'\cf4 \strokec4 ));\cb1 \
\cf5 \cb3 \strokec5 const quote\cf4 \strokec4  = \cf6 \strokec6 words\cf4 \strokec4 .\cf7 \strokec7 get\cf4 \strokec4 (\cf9 \strokec9 'quote'\cf4 \strokec4 );\cb1 \
\
\cf5 \cb3 \strokec5 const verb1\cf4 \strokec4  = \cf6 \strokec6 words\cf4 \strokec4 .\cf7 \strokec7 get\cf4 \strokec4 (\cf9 \strokec9 'verb-1'\cf4 \strokec4 );\cb1 \
\cf5 \cb3 \strokec5 const num1\cf4 \strokec4  = \cf6 \strokec6 words\cf4 \strokec4 .\cf7 \strokec7 get\cf4 \strokec4 (\cf9 \strokec9 'num-1'\cf4 \strokec4 );\cb1 \
\cf5 \cb3 \strokec5 const message\cf4 \strokec4  = \cf6 \strokec6 words\cf4 \strokec4 .\cf7 \strokec7 get\cf4 \strokec4 (\cf9 \strokec9 'message'\cf4 \strokec4 );\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 // The string containing HTML and text which will populate the story.html page\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const story\cf4 \strokec4  = \cf9 \strokec9 `<p>A <span class="word" title="id: animal-1">\cf4 \strokec4 $\{\cf6 \strokec6 firstAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> was making fun of the <span class="word" title="id: animal-2">\cf4 \strokec4 $\{\cf6 \strokec6 secondAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> one day for being so slow.</p>\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf9 \cb3 \strokec9 <p>"Do you ever get anywhere?" he asked with a mocking laugh.</p>\cf4 \cb1 \strokec4 \
\
\cf9 \cb3 \strokec9 <p>"<span class="word" title="id: answer">\cf4 \strokec4 $\{\cf6 \strokec6 answer\cf4 \strokec4 \}\cf9 \strokec9 </span>," replied the <span class="word" title="id: animal-2">\cf4 \strokec4 $\{\cf6 \strokec6 secondAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span>, "\cf4 \strokec4 $\{\cf6 \strokec6 conjunction\cf4 \strokec4 \}\cf9 \strokec9  I get there <span class="word" title="id: speed">\cf4 \strokec4 $\{\cf6 \strokec6 speed\cf4 \strokec4 \}\cf9 \strokec9 </span> than you think. I'll run you a race and prove it."</p>\cf4 \cb1 \strokec4 \
\
\cf9 \cb3 \strokec9 <p>The <span class="word" title="id: animal-1">\cf4 \strokec4 $\{\cf6 \strokec6 firstAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> was much <span class="word" title="id: adj-1">\cf4 \strokec4 $\{\cf6 \strokec6 adj1\cf4 \strokec4 \}\cf9 \strokec9 </span> at the idea of running a race with the <span class="word" title="id: animal-2">\cf4 \strokec4 $\{\cf6 \strokec6 secondAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span>, but for the fun of the thing he agreed. So the <span class="word" title="id: animal-3">\cf4 \strokec4 $\{\cf6 \strokec6 thirdAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span>, who had consented to act as judge, marked the distance yelled, "<span class="word" title="id: quote">\cf4 \strokec4 $\{\cf6 \strokec6 quote\cf4 \strokec4 \}\cf9 \strokec9 </span>".</p>\cf4 \cb1 \strokec4 \
\
\cf9 \cb3 \strokec9 <p>The <span class="word" title="id: animal-1">\cf4 \strokec4 $\{\cf6 \strokec6 firstAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> was soon far out of sight, and to make the <span class="word" title="id: animal-2">\cf4 \strokec4 $\{\cf6 \strokec6 secondAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> feel very deeply how ridiculous it was for him to try a race with a <span class="word" title="id: animal-1">\cf4 \strokec4 $\{\cf6 \strokec6 firstAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span>, he went off the course to practice <span class="word" title="id: verb-1">\cf4 \strokec4 $\{\cf6 \strokec6 verb1\cf4 \strokec4 \}\cf9 \strokec9 </span> for <span class="word" title="id: num-1">\cf4 \strokec4 $\{\cf6 \strokec6 num1\cf4 \strokec4 \}\cf9 \strokec9 </span> hours until the <span class="word" title="id: animal-2">\cf4 \strokec4 $\{\cf6 \strokec6 secondAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> should catch up.</p>\cf4 \cb1 \strokec4 \
\
\cf9 \cb3 \strokec9 <p>The <span class="word" title="id: animal-2">\cf4 \strokec4 $\{\cf6 \strokec6 secondAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> meanwhile kept going slowly but steadily, and, after a time, passed the place where the <span class="word" title="animal-1">\cf4 \strokec4 $\{\cf6 \strokec6 firstAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> was <span class="word" title="id: verb-1">\cf4 \strokec4 $\{\cf6 \strokec6 verb1\cf4 \strokec4 \}\cf9 \strokec9 </span>. The <span class="word" title="id: animal-1">\cf4 \strokec4 $\{\cf6 \strokec6 firstAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> was so caught up in <span class="word" title="id: verb-1">\cf4 \strokec4 $\{\cf6 \strokec6 verb1\cf4 \strokec4 \}\cf9 \strokec9 </span>; and when at last he did stop, the <span class="word" title="id: animal-2">\cf4 \strokec4 $\{\cf6 \strokec6 secondAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> was near the goal. The <span class="word" title="id: animal-1">\cf4 \strokec4 $\{\cf6 \strokec6 firstAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> now ran his swiftest, but he could not overtake the <span class="word" title="id: animal-2">\cf4 \strokec4 $\{\cf6 \strokec6 secondAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> in time.</p>`\cf4 \strokec4 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 // Grabbing the title element\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const title\cf4 \strokec4  = \cf6 \strokec6 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf9 \strokec9 'title'\cf4 \strokec4 );\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 // Populating the title element with text\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 title\cf4 \strokec4 .\cf7 \strokec7 innerHTML\cf4 \strokec4  = \cf9 \strokec9 `The <span class="word" title="id: animal-1">\cf4 \strokec4 $\{\cf6 \strokec6 firstAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span> And The  <span class="word" title="id: animal-2">\cf4 \strokec4 $\{\cf6 \strokec6 secondAnimal\cf4 \strokec4 \}\cf9 \strokec9 </span>`\cf4 \strokec4 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 // Grabbing the story element\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const storyEl\cf4 \strokec4  = \cf6 \strokec6 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf9 \strokec9 'story'\cf4 \strokec4 );\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 // Populating the story element with the value of the story variable\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 storyEl\cf4 \strokec4 .\cf7 \strokec7 innerHTML\cf4 \strokec4  = \cf6 \strokec6 story\cf4 \strokec4 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 // Grabbing the moral-message element\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const moralMessage\cf4 \strokec4  = \cf6 \strokec6 document\cf4 \strokec4 .\cf7 \strokec7 getElementById\cf4 \strokec4 (\cf9 \strokec9 'moral-message'\cf4 \strokec4 );\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 // Populating the moral-message element with text\cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 moralMessage\cf4 \strokec4 .\cf7 \strokec7 innerHTML\cf4 \strokec4  = \cf9 \strokec9 `<span class="italics" title="id: message">"\cf4 \strokec4 $\{\cf6 \strokec6 message\cf4 \strokec4 \}\cf9 \strokec9 "</span>`\cf4 \strokec4 ;\cb1 \
\
}