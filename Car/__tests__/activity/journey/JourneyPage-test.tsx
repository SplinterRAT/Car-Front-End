import React from "react";
import shallowRenderer from "react-test-renderer/shallow";
import JourneyPage from "../../../src/activity/journey/journey-activity/journey-page/JourneyPage";

const renderer = shallowRenderer.createRenderer();

jest.mock("react-native-gesture-handler", () => require("react-native"));
jest.mock("reanimated-bottom-sheet", () => {});

test("renders correctly", () =>
    expect(
        renderer.render(
            <JourneyPage props={{ route: { params: { journeyId: 1 } } }} />
        )
    ).toMatchInlineSnapshot(`
    <React.Fragment>
      <View
        style={
          Array [
            Object {
              "alignItems": "center",
              "flex": 1,
            },
            Object {
              "backgroundColor": "#88FF88",
            },
          ]
        }
      >
        <Text
          style={
            Array [
              Object {
                "fontFamily": "Proxima Nova",
              },
              Object {
                "color": "#222222",
              },
            ]
          }
        >
          Map implementation is in progress
        </Text>
      </View>
      <BottomPopup
        enabledInnerScrolling={true}
        initialSnap={1}
        refForChild={
          Object {
            "current": null,
          }
        }
        renderContent={
          <View
            style={
              Array [
                Object {
                  "alignSelf": "center",
                  "paddingHorizontal": "5%",
                  "width": "100%",
                },
                Object {
                  "backgroundColor": "white",
                },
              ]
            }
          >
            <View
              style={
                Object {
                  "flexDirection": "row",
                  "paddingLeft": 16,
                  "paddingTop": 22,
                }
              }
            >
              <View
                style={
                  Object {
                    "alignItems": "center",
                    "height": 36,
                    "justifyContent": "center",
                    "width": 36,
                  }
                }
              >
                <Icon
                  allowFontScaling={false}
                  color="#414045"
                  name="car"
                  size={20}
                />
              </View>
              <View
                style={
                  Object {
                    "paddingLeft": 10,
                  }
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontFamily": "Open Sans",
                        "fontSize": 13,
                        "lineHeight": 16,
                        "paddingBottom": 4,
                        "paddingTop": 1.25,
                      },
                      Object {
                        "color": "#000000",
                      },
                    ]
                  }
                >
                   
                </Text>
                <Text
                  style={
                    Array [
                      Object {
                        "fontFamily": "Open Sans",
                        "fontSize": 11,
                        "lineHeight": 16,
                      },
                      Object {
                        "color": "#414045",
                      },
                    ]
                  }
                />
              </View>
            </View>
            <View
              style={
                Object {
                  "justifyContent": "space-around",
                  "marginLeft": 14,
                  "marginTop": 20,
                  "paddingBottom": 30,
                  "width": "100%",
                }
              }
            >
              <React.Fragment>
                <View
                  style={
                    Object {
                      "flexDirection": "row",
                    }
                  }
                >
                  <View
                    style={
                      Object {
                        "alignItems": "center",
                        "flexDirection": "column",
                      }
                    }
                  >
                    <Icon
                      allowFontScaling={false}
                      color="#AAA9AE"
                      name="ellipse"
                      size={18}
                    />
                    <View
                      style={
                        Array [
                          Object {
                            "height": 12,
                            "width": 2,
                          },
                          Object {
                            "backgroundColor": "#AAA9AE",
                          },
                        ]
                      }
                    />
                  </View>
                  <Text
                    style={
                      Object {
                        "color": "black",
                      }
                    }
                  >
                    Location A
                  </Text>
                </View>
                <View
                  style={
                    Object {
                      "flexDirection": "row",
                    }
                  }
                >
                  <View
                    style={
                      Object {
                        "alignItems": "center",
                        "flexDirection": "column",
                      }
                    }
                  >
                    <Icon
                      allowFontScaling={false}
                      color="#AAA9AE"
                      name="ellipse"
                      size={18}
                    />
                  </View>
                  <Text
                    style={
                      Object {
                        "color": "black",
                      }
                    }
                  >
                    Location B
                  </Text>
                </View>
              </React.Fragment>
            </View>
            <Text
              style={
                Array [
                  Object {
                    "fontFamily": "Proxima Nova",
                    "fontSize": 16,
                    "fontWeight": "bold",
                    "justifyContent": "flex-start",
                    "marginBottom": 10,
                  },
                  Object {
                    "color": "black",
                  },
                ]
              }
            >
              SOFTSERVIANS 
              /
            </Text>
            <View
              style={
                Object {
                  "height": 221,
                }
              }
            />
          </View>
        }
        renderHeader={
          <View
            style={
              Array [
                Object {
                  "alignSelf": "center",
                  "paddingHorizontal": "5%",
                  "width": "100%",
                },
                Object {
                  "backgroundColor": "white",
                },
              ]
            }
          >
            <ForwardRef
              onPress={[Function]}
              style={
                Object {
                  "flexDirection": "row",
                  "justifyContent": "space-around",
                  "paddingLeft": 2,
                }
              }
            >
              <View
                style={
                  Object {
                    "alignItems": "flex-start",
                    "justifyContent": "space-around",
                    "margin": 7,
                    "marginLeft": 13,
                  }
                }
              >
                <AvatarLogo
                  size={38.5}
                />
              </View>
              <View
                style={
                  Object {
                    "flex": 5,
                    "flexDirection": "column",
                    "justifyContent": "space-around",
                  }
                }
              >
                <Text
                  style={
                    Array [
                      Object {
                        "fontFamily": "Open Sans",
                        "fontSize": 15,
                        "fontWeight": "700",
                      },
                      Object {
                        "color": "black",
                      },
                    ]
                  }
                >
                   
                  's journey
                </Text>
                <View
                  style={
                    Object {
                      "flexDirection": "row",
                      "justifyContent": "space-between",
                    }
                  }
                >
                  <Text
                    style={
                      Array [
                        Object {
                          "fontFamily": "Open Sans",
                          "fontSize": 13,
                          "fontWeight": "100",
                        },
                        Object {
                          "color": "#909095",
                        },
                      ]
                    }
                  />
                  <Text
                    style={
                      Array [
                        Object {
                          "fontFamily": "Open Sans",
                          "fontSize": 13,
                          "fontWeight": "700",
                        },
                        Object {
                          "color": "#02A2CF",
                        },
                      ]
                    }
                  >
                    01/01/1970
                  </Text>
                </View>
              </View>
            </ForwardRef>
            <View
              style={
                Object {
                  "height": 27,
                }
              }
            />
            <Themed.Divider
              style={
                Array [
                  Object {
                    "height": 1,
                    "width": "100%",
                  },
                  Object {
                    "backgroundColor": "#C1C1C5",
                  },
                ]
              }
            />
            <View
              style={
                Array [
                  Object {
                    "paddingHorizontal": "5%",
                    "position": "absolute",
                    "top": 411,
                    "width": 750,
                  },
                  Object {
                    "backgroundColor": "#FFFFFF",
                  },
                ]
              }
            >
              <Themed.Divider
                style={
                  Array [
                    Object {
                      "height": 1,
                      "width": "100%",
                    },
                    Object {
                      "backgroundColor": "#C1C1C5",
                    },
                  ]
                }
              />
              <View
                style={
                  Object {
                    "flexDirection": "row",
                    "justifyContent": "flex-end",
                    "marginBottom": 16,
                    "marginTop": 16,
                  }
                }
              >
                <ForwardRef
                  disabled={false}
                  onPress={[Function]}
                  style={
                    Array [
                      Object {
                        "alignItems": "center",
                        "height": 51,
                        "justifyContent": "center",
                        "width": 386.25,
                      },
                      Object {
                        "backgroundColor": "black",
                      },
                      false,
                    ]
                  }
                >
                  <Text
                    style={
                      Array [
                        Object {
                          "fontSize": 18,
                          "fontWeight": "700",
                          "textTransform": "uppercase",
                        },
                        Object {
                          "color": "white",
                        },
                      ]
                    }
                  >
                    Request to driver
                  </Text>
                </ForwardRef>
              </View>
            </View>
          </View>
        }
        snapPoints={
          Array [
            683,
            0,
          ]
        }
        style={
          Object {
            "backgroundColor": "white",
          }
        }
      />
    </React.Fragment>
  `));
