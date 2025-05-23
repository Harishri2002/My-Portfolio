import type React from "react"

export interface BlogPostType {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  content: React.ReactNode
  tags: string[]
  readingTime: number
}

// Sample blog posts
const blogPosts: BlogPostType[] = [
  {
  slug: "chunked-uploading-best-practices",
  title: "Cracking Chunked Uploading: Why Dart + C Steals the Show",
  date: "2025-05-21",
  coverImage: "/assets/blog/post1.png",
  excerpt:
    "Hey there! Let’s dive into chunked uploading in Flutter—figuring out the best way to handle big files without crashing your app. Spoiler: Dart + C is the winner!",
  content: (
    <>
      <p>
        Hey, what’s up? So, I’ve been geeking out lately on chunked uploading—basically, how to break down massive files into smaller bits and process them without turning your app into a memory hog or a laggy mess. If you’ve ever tried uploading a huge file (think 1GB videos or giant datasets) on a mobile app, you know the struggle is real! I wanted to find the absolute best way to do this in Flutter, balancing speed, memory use, and keeping the app smooth for users. After a ton of experiments, I’m excited to share what I found: the <strong>Dart + C</strong> approach totally rocks. Let me walk you through the journey—it’s been quite a ride!
      </p>

      <h2>What’s Chunked Uploading All About?</h2>
      <p>
        Alright, let’s break it down. Chunked uploading is when you take a big file—say, a 1GB video—and split it into smaller pieces (or chunks) to process one at a time. This is super handy for uploading large files without your app crashing or eating up all the device’s memory. In our Flutter app, we had a few goals in mind:
      </p>
      <ul>
        <li><strong>Speed:</strong> Chunk the file as fast as possible—no one likes waiting forever!</li>
        <li><strong>Memory:</strong> Don’t hog all the RAM, especially on mobile devices with limited resources.</li>
        <li><strong>UI Smoothness:</strong> Keep the app responsive so users aren’t staring at a frozen screen.</li>
        <li><strong>Keep It Simple:</strong> A clean, maintainable solution that doesn’t make future me cry.</li>
      </ul>

      <h2>Our Big Experiment: Testing Four Different Methods</h2>
      <p>
        To find the best approach, we tried out four different ways to handle chunked uploading in Flutter. We started with smaller files (10MB, 100MB) to get a feel for things, then cranked it up to a 1GB file to really stress-test each method. For consistency, we used a 1MB chunk size for most tests (except where I’ll mention otherwise). Here’s the lineup:
      </p>
      <ul>
        <li><strong>Pure Dart:</strong> Just using Dart’s built-in file I/O to slice and save chunks.</li>
        <li><strong>Dart + Isolate:</strong> Using Dart isolates to run chunking in the background and keep the UI snappy.</li>
        <li><strong>Dart + C:</strong> Calling a C function through Flutter’s FFI (Foreign Function Interface) for faster chunking.</li>
        <li><strong>Isolate + C:</strong> Combining isolates with the C function to get the best of both worlds.</li>
      </ul>

      <h2>Starting Point: The First Try and Some Bumps</h2>
      <p>
        We kicked things off with a simple Flutter app where users could pick a file and chunk it using any of these methods. The Pure Dart method was the easiest to set up—just reading and writing chunks with Dart’s `File` class. It worked fine for smaller files, but man, it was slow for bigger ones. For a 100MB file, it took around 5-8 seconds, and the UI froze while it was working. Not ideal!
      </p>
      <p>
        Next, we tried Dart + Isolate to fix the UI freezing issue. Isolates in Dart let you run code in a separate thread, so the main UI thread stays responsive. We set it up to process chunks in parallel, with up to 4 isolates running at once. It sounded awesome, but for a 100MB file, it took around 4-6 seconds—better, but still not great. Plus, when we scaled up to a 1GB file with 5MB chunks (200 chunks total), it crashed with an "Out of memory" error after 39 seconds. Ouch! Turns out, we were loading the entire file into memory in each isolate—4 isolates meant 4GB of memory usage. Total rookie mistake.
      </p>
      <p>
        Then came Dart + C. We wrote a C function called `chunk_file` that did the chunking efficiently, using `fread` and `fwrite` to read and write chunks without loading the whole file into memory. We called this function from Dart using FFI. For a 100MB file, it took just 1.5-2 seconds—blazing fast! The catch? It ran on the main thread, so the UI froze during chunking. Still, the speed and memory efficiency were hard to beat.
      </p>
      <p>
        Finally, we tried Isolate + C, where we offloaded the C function call to a single isolate. This kept the UI responsive, and for a 100MB file, it took 1.6-2.1 seconds—barely slower than Dart + C. It looked promising, but we wanted to dig deeper to confirm the best approach.
      </p>

      <h2>Digging Deeper: Fixing the Memory Issue with Dart + Isolate</h2>
      <p>
        Let’s zoom in on that Dart + Isolate crash with the 1GB file. The problem was in how we were reading the file: `file.readAsBytesSync()` loaded the whole 1GB into memory for each isolate. With 4 isolates running at once, that’s 4GB—way more than most devices can handle! To fix this, we switched to a streaming approach using `RandomAccessFile`. Instead of loading the entire file, we opened the file, seeked to the right spot, and read just the 5MB chunk we needed. Same for writing—we wrote only the chunk to disk. Boom, memory usage dropped to a manageable 20-40MB (4 × 5MB for the chunks, plus isolate overhead). After this fix, Dart + Isolate successfully chunked the 1GB file in about 40-60 seconds. Not bad, but still slower than the C-based methods.
      </p>

      <h2>Comparing Performance: The Numbers Don’t Lie</h2>
      <p>
        Now that we had all methods working, let’s look at the numbers for a 1GB file (with 5MB chunks for Dart + Isolate, 1MB chunks for others):
      </p>
      <ul>
        <li><strong>Pure Dart:</strong> 50-80 seconds. Super slow, and the UI froze the whole time. It did finish, though, since it used a streaming approach under the hood.</li>
        <li><strong>Dart + Isolate:</strong> 40-60 seconds (after the memory fix). The UI stayed responsive, which is awesome, but the speed wasn’t impressive compared to the C methods.</li>
        <li><strong>Dart + C:</strong> 15-20 seconds. Crazy fast, and memory usage stayed low since the C code (`chunk_file`) only read/wrote chunks incrementally. Downside: UI freezing.</li>
        <li><strong>Isolate + C:</strong> 16-21 seconds. Almost as fast as Dart + C, with the bonus of a responsive UI thanks to the isolate.</li>
      </ul>
      <p>
        For smaller files like 100MB, the pattern was similar: Pure Dart took 5-8 seconds, Dart + Isolate took 4-6 seconds, Dart + C took 1.5-2 seconds, and Isolate + C took 1.6-2.1 seconds. The C-based methods were consistently faster, no matter the file size.
      </p>

      <h2>Why Didn’t Isolates Speed Things Up More?</h2>
      <p>
        I was really hoping Dart + Isolate would shine with its parallel processing, but it didn’t quite pan out. Here’s why: the chunking process is mostly I/O-bound (reading/writing to disk), not CPU-bound. Isolates help with CPU-heavy tasks by spreading work across cores, but disk I/O is a bottleneck that doesn’t parallelize well on a single device. Plus, each isolate has a startup cost (50-100ms), and with 200 chunks, that overhead adds up. The C methods, on the other hand, did all the I/O in a single, efficient function call, with no extra overhead from isolates.
      </p>
      <p>
        Isolate + C was a bit slower than Dart + C because of the isolate startup cost, but the difference was small—only about 100-200ms for a 100MB file, or 1-2 seconds for a 1GB file. The trade-off? A responsive UI, which is a big win for user experience.
      </p>

      <h2>Our Conclusion: Dart + C Takes the Crown</h2>
      <p>
        After all this testing, tweaking, and number-crunching, we landed on <strong>Dart + C</strong> as the best approach for chunked uploading in our Flutter app. Here’s why it stole the show:
      </p>
      <ul>
        <li><strong>Speed:</strong> It’s the fastest by far—15-20 seconds for a 1GB file, compared to 40-60 seconds for Dart + Isolate.</li>
        <li><strong>Memory Efficiency:</strong> The C code (`chunk_file`) processes chunks incrementally, keeping memory usage low (just a few MB at a time).</li>
        <li><strong>Simplicity:</strong> One FFI call to a C function—no messing with isolates, batches, or complex logic. It’s clean and easy to maintain.</li>
        <li><strong>Scalability:</strong> It handled everything we threw at it, from 10MB to 1GB, without breaking a sweat.</li>
      </ul>
      <p>
        The only downside is the UI freezing, since Dart + C runs on the main thread. If that’s a dealbreaker for your app, Isolate + C is a fantastic alternative—it’s almost as fast (16-21 seconds for 1GB) and keeps the UI smooth. For us, though, the raw performance of Dart + C made it the winner, especially since our app can handle a brief UI freeze during uploads (we show a loading spinner to keep users in the loop).
      </p>
      <p>
        So, what’s the takeaway? If you’re building a Flutter app that needs to chunk large files, go with Dart + C for the best performance. Use FFI to call a C function that handles the I/O efficiently, and you’ll save time and memory. If UI responsiveness is critical, add an isolate (Isolate + C) for a small performance trade-off. Either way, you’ll be way ahead of pure Dart methods!
      </p>
      <p>
        Got questions or want to share your own chunking adventures? Drop a comment—I’d love to chat! Happy coding!
      </p>
    </>
  ),
  tags: ["Flutter", "Chunked Uploading", "Dart", "C", "Performance Optimization"],
  readingTime: 8,
},
]

export function getBlogPosts(): BlogPostType[] {
  return blogPosts
}

export function getBlogPost(slug: string): BlogPostType | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
