import 'package:flutter/material.dart';

void main() {
  runApp(const BaseApp());
}

class BaseApp extends StatefulWidget {
  const BaseApp({super.key});

  @override
  State<BaseApp> createState() => _BaseAppState();
}

class _BaseAppState extends State<BaseApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      color: Colors.white,
      home: Scaffold(
        backgroundColor: Colors.white,
        body: Container(
            height: MediaQuery.of(context).size.height,
            width: MediaQuery.of(context).size.width,
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                  colors: [Color(0xFF90252F), Color(0xFF43172B)]),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                Container(
                  height: MediaQuery.of(context).size.height - 200,
                  width: MediaQuery.of(context).size.width - 600,
                  margin: const EdgeInsets.all(30),
                  decoration: const BoxDecoration(
                      color: Color(0xFF171218),
                      borderRadius: BorderRadius.all(Radius.circular(20))),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                          margin: const EdgeInsets.fromLTRB(5, 25, 0, 0),
                          height: (MediaQuery.of(context).size.height - 200),
                          width: (MediaQuery.of(context).size.width - 630) / 2,
                          child: Column(
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  Center(
                                    child: Container(
                                      margin: const EdgeInsets.fromLTRB(
                                          100, 25, 10, 20),
                                      height: 15,
                                      width: 15,
                                      decoration: const BoxDecoration(
                                          color: Color(0xFFBBAABB),
                                          shape: BoxShape.circle),
                                    ),
                                  ),
                                  const Text(
                                    "ELEVATE",
                                    style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 30,
                                        fontWeight: FontWeight.w200),
                                  )
                                ],
                              ),
                              const Padding(
                                padding: EdgeInsets.fromLTRB(120, 80, 120, 0),
                                child: Text(
                                  "This is the last JEE help you will ever need.",
                                  maxLines: 3,
                                  textAlign: TextAlign.left,
                                  style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 45,
                                      fontWeight: FontWeight.w600),
                                ),
                              ),
                              const Padding(
                                padding: EdgeInsets.fromLTRB(120, 20, 120, 0),
                                child: Text(
                                  maxLines: 3,
                                  "There are many options available in market but our program will show you what you need not what you want!",
                                  style: TextStyle(
                                      color: Colors.white60,
                                      fontWeight: FontWeight.w100),
                                ),
                              ),
                              Padding(
                                  padding: const EdgeInsets.fromLTRB(
                                      120, 20, 120, 0),
                                  child: TextField(
                                    maxLength: 10,
                                    maxLines: 1,
                                    style: const TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 25),
                                    minLines: 1,
                                    textAlignVertical: TextAlignVertical.top,
                                    textAlign: TextAlign.center,
                                    autocorrect: false,
                                    expands: false,
                                    decoration: InputDecoration(
                                      labelText: "Sign Up?",
                                      floatingLabelBehavior:
                                          FloatingLabelBehavior.never,
                                      suffixIconColor: Colors.deepPurpleAccent,
                                      suffix: IconButton(
                                        iconSize: 22,
                                        icon: const Icon(
                                            Icons.arrow_forward_ios_rounded),
                                        onPressed: () {},
                                      ),
                                      fillColor: Colors.white,
                                      filled: true,
                                      hintStyle: const TextStyle(
                                          fontSize: 25,
                                          fontWeight: FontWeight.bold),
                                      hintText: "0011223344",
                                      border: const OutlineInputBorder(
                                          borderRadius: BorderRadius.all(
                                              Radius.circular(70))),
                                    ),
                                  )),
                              const Padding(
                                padding: EdgeInsets.fromLTRB(120, 0, 120, 0),
                                child: InkWell(
                                  child: Text(
                                    "OR SIGN IN?",
                                    style: TextStyle(
                                        decoration: TextDecoration.underline,
                                        fontWeight: FontWeight.w100,
                                        color: Colors.white54),
                                  ),
                                ),
                              ),
                              const Padding(
                                padding: EdgeInsets.fromLTRB(120, 80, 120, 0),
                                child: Divider(
                                  color: Colors.white,
                                ),
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.fromLTRB(120, 0, 120, 0),
                                child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceAround,
                                  children: [
                                    IconButton(
                                        iconSize: 40,
                                        onPressed: () {},
                                        icon: const Icon(Icons.android)),
                                    IconButton(
                                        iconSize: 40,
                                        onPressed: () {},
                                        icon: const Icon(Icons.apple)),
                                    IconButton(
                                        iconSize: 40,
                                        onPressed: () {},
                                        icon: const Icon(Icons.desktop_mac))
                                  ],
                                ),
                              )
                            ],
                          )),
                      Container(
                          margin: const EdgeInsets.all(0),
                          height: (MediaQuery.of(context).size.height - 200),
                          width: (MediaQuery.of(context).size.width - 630) / 2,
                          decoration: const BoxDecoration(
                              borderRadius: BorderRadius.only(
                                  topRight: Radius.circular(20),
                                  bottomRight: Radius.circular(20)),
                              image: DecorationImage(
                                fit: BoxFit.fitHeight,
                                alignment: FractionalOffset.topCenter,
                                image: NetworkImage(
                                    'https://wallpapersmug.com/large/920758/abstract-dark-red-4k.jpg'),
                              ))),
                    ],
                  ),
                ),
                FlutterLogo(
                  size:
                      clamp(MediaQuery.of(context).size.width - 800, 100, 250),
                  textColor: Colors.blue,
                  style: FlutterLogoStyle.stacked,
                )
              ],
            )),
      ),
    );
  }

  double clamp(double n, double a, double b) {
    if (n < a) return a;
    if (n > b) return b;
    return n;
  }
}
