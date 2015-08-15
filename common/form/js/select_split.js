var parentTopHeight = 0;
var broswerFlag;
$(function() {
	if (window.navigator.userAgent.indexOf("MSIE") >= 1) {
		var a = window.navigator.userAgent.substring(30, 33);
		if (a == "6.0") {
			broswerFlag = "IE6"
		} else {
			if (a == "7.0") {
				broswerFlag = "IE7"
			} else {
				if (a == "8.0") {
					broswerFlag = "IE8"
				}
			}
		}
	} else {
		if (window.navigator.userAgent.indexOf("Firefox") >= 1) {
			broswerFlag = "Firefox"
		} else {
			if (window.navigator.userAgent.indexOf("Opera") >= 0) {
				broswerFlag = "Opera"
			} else {
				if (window.navigator.userAgent.indexOf("Safari") >= 1) {
					broswerFlag = "Safari"
				} else {
					broswerFlag = "Other"
				}
			}
		}
	}
	
	$("select[class*=extSelect]").not("[multiple]").selectbox()
});
jQuery.fn.extend( {
	selectbox : function(a) {
		return this.each(function() {
			new jQuery.SelectBox(this, a)
		})
	}
});
if (!window.console) {
	var console = {
		log : function(a) {
		}
	}
}
var depth = 500;
var elm_id = 1;
jQuery.SelectBox = function(F, g) {
	var c = g || {};
	c.inputClass = c.inputClass || "selectbox";
	c.containerClass = c.containerClass || "selectbox-wrapper";
	c.hoverClass = c.hoverClass || "current";
	c.currentClass = c.selectedClass || "selected";
	c.debug = c.debug || false;
	elm_id++;
	var i = 0;
	var e = false;
	var D = 0;
	var A = $(F);
	var x = k(c);
	var p = B();
	var d = q(c);
	var w = false;
	var v = false;
	var j = 1;
	var E;
	var C;
	var G = 0;
	if (window.navigator.userAgent.indexOf("Windows") > -1) {
		G = 1
	}
	C = A.width();
	if (C == "0") {
		C = 116
	}
	var n;
	if (G == 1) {
		if (broswerFlag == "Safari") {
			n = $("<input type='button' value=' ' class='selBtn_safari'/>")
		} else {
			n = $("<input type='button' value=' ' class='selBtn'/>")
		}
	} else {
		n = $("<input type='button' value=' ' class='selBtn_linux'/>")
	}
	if (A.attr("disabled") == true) {
		n.attr("disabled", true);
		n.addClass("selBtn_disabled")
	}
	var u = $("<div class='loader'>数据加载中...</div>");
	if (A.attr("autoWidth") != null) {
		if (A.attr("autoWidth") == "true") {
			w = true
		} else {
			w = false
		}
	}
	if (A.attr("colNum") != null) {
		j = parseInt(A.attr("colNum"))
	}
	if (A.attr("colWidth") != null) {
		E = Number(A.attr("colWidth"))
	}
	if (j != 1) {
		if (w) {
			d.width(C - 20)
		} else {
			d.width(178)
		}
		if (E != null) {
			x.width(E * j + 40)
		} else {
			var b = Number(C);
			x.width(b * j + 40)
		}
	} else {
		if (w) {
			d.width(C - 20);
			x.width(C + 6)
		} else {
			d.width(178);
			var f = 178 + 4 + 22;
			var b = Number(C);
			x.width(Math.max(f, b))
		}
	}
	A.hide().before(p);
	p.append(d);
	p.append(n);
	p.append(x);
	p.append(u);
	u.hide();
	y();
	if (A.attr("editable") != null) {
		if (A.attr("editable") == "true") {
			v = true
		} else {
			v = false
		}
	}
	if (!v) {
		d.css( {
			cursor : "pointer"
		});
		d
				.click(
						function() {
							var L;
							var J = x.find("li").length;
							if (j == 1) {
								L = J * 26
							} else {
								if (J % j == 0) {
									L = J * 26 / j
								} else {
									L = (J - J % j) * 26 / j + 26
								}
							}
							x.height(L);
							var H = 200;
							if (parentTopHeight > 0) {
								var K = window.top.document.documentElement.clientHeight;
								H = K - parentTopHeight - parentBottomHeight
										- p.offset().top - 30
							} else {
								H = window.document.documentElement.clientHeight
										- (p.offset().top - $(window)
												.scrollTop()) - 30
							}
							if (H < x.height()) {
								if (p.offset().top > x.height()) {
									if (broswerFlag == "IE8") {
										x.css( {
											top : -x.height() - 17
										})
									} else {
										if ($.browser.msie) {
											x.css( {
												top : -x.height()
											})
										} else {
											x.css( {
												top : -x.height() - 7
											})
										}
									}
								} else {
									if (H < 100 && p.offset().top > H) {
										x.height(p.offset().top);
										x.css( {
											overflow : "auto"
										});
										if (broswerFlag == "IE8") {
											x.css( {
												top : -x.height() - 17
											})
										} else {
											if ($.browser.msie) {
												x.css( {
													top : -x.height()
												})
											} else {
												x.css( {
													top : -x.height() - 7
												})
											}
										}
									} else {
										x.css( {
											overflow : "auto"
										});
										if (broswerFlag == "IE8") {
											x.css( {
												top : 8
											})
										} else {
											if ($.browser.msie) {
												x.css( {
													top : 25
												})
											} else {
												x.css( {
													top : 18
												})
											}
										}
										x.height(H)
									}
								}
							} else {
								if (broswerFlag == "IE8") {
									x.css( {
										top : 8
									})
								} else {
									if ($.browser.msie) {
										x.css( {
											top : 25
										})
									} else {
										x.css( {
											top : 18
										})
									}
								}
							}
							if (!e) {
								depth++;
								p.css( {
									zIndex : depth
								});
								setTimeout(I, 100)
							}
							function I() {
								x.toggle()
							}
						}).focus(function() {
					if (x.not(":visible")) {
						depth++;
						p.css( {
							zIndex : depth
						});
						e = true;
						setTimeout(H, 100)
					}
					function H() {
						x.show()
					}
				}).keydown(function(H) {
					switch (H.keyCode) {
					case 38:
						H.preventDefault();
						o(-1);
						break;
					case 40:
						H.preventDefault();
						o(1);
						break;
					case 13:
						H.preventDefault();
						$("li." + c.hoverClass).trigger("click");
						break;
					case 27:
						l();
						break
					}
				}).blur(function() {
					if (x.is(":visible") && D > 0) {
						if (c.debug) {
							console.log("container visible and has focus")
						}
					} else {
						l()
					}
				})
	} else {
		d.css( {
			cursor : "text"
		});
		d.change(function() {
			A.attr("editValue", $(this).val())
		})
	}
	n.click(
			function() {
				var L;
				var J = x.find("li").length;
				if (j == 1) {
					L = J * 26
				} else {
					if (J % j == 0) {
						L = J * 26 / j
					} else {
						L = (J - J % j) * 26 / j + 26
					}
				}
				x.height(L);
				var I = 200;
				if (parentTopHeight > 0) {
					var K = window.top.document.documentElement.clientHeight;
					I = K - parentTopHeight - parentBottomHeight
							- p.offset().top - 30
				} else {
					I = window.document.documentElement.clientHeight
							- (p.offset().top - $(window).scrollTop()) - 30
				}
				if (I < x.height()) {
					if (p.offset().top > x.height()) {
						if (broswerFlag == "IE8") {
							x.css( {
								top : -x.height() - 17
							})
						} else {
							if ($.browser.msie) {
								x.css( {
									top : -x.height()
								})
							} else {
								x.css( {
									top : -x.height() - 7
								})
							}
						}
					} else {
						if (I < 100 & p.offset().top > I) {
							x.height(p.offset().top);
							x.css( {
								overflow : "auto"
							});
							if (broswerFlag == "IE8") {
								x.css( {
									top : -x.height() - 17
								})
							} else {
								if ($.browser.msie) {
									x.css( {
										top : -x.height()
									})
								} else {
									x.css( {
										top : -x.height() - 7
									})
								}
							}
						} else {
							x.css( {
								overflow : "auto"
							});
							if (broswerFlag == "IE8") {
								x.css( {
									top : 8
								})
							} else {
								if ($.browser.msie) {
									x.css( {
										top : 25
									})
								} else {
									x.css( {
										top : 18
									})
								}
							}
							x.height(I)
						}
					}
				} else {
					if (broswerFlag == "IE8") {
						x.css( {
							top : 8
						})
					} else {
						if ($.browser.msie) {
							x.css( {
								top : 25
							})
						} else {
							x.css( {
								top : 18
							})
						}
					}
				}
				if (!e) {
					depth++;
					p.css( {
						zIndex : depth
					});
					setTimeout(H, 100)
				}
				function H() {
					x.toggle()
				}
			}).focus(function() {
		if (x.not(":visible")) {
			depth++;
			p.css( {
				zIndex : depth
			});
			e = true;
			setTimeout(H, 100)
		}
		function H() {
			x.show()
		}
	}).keydown(function(H) {
		switch (H.keyCode) {
		case 38:
			H.preventDefault();
			o(-1);
			break;
		case 40:
			H.preventDefault();
			o(1);
			break;
		case 13:
			H.preventDefault();
			$("li." + c.hoverClass).trigger("click");
			break;
		case 27:
			l();
			break
		}
	}).blur(function() {
		if (x.is(":visible") && D > 0) {
			if (c.debug) {
				console.log("container visible and has focus")
			}
		} else {
			l()
		}
	});
	function l() {
		D = 0;
		x.hide()
	}
	function y() {
		x.append(r(d.attr("id"))).hide();
		var H = d.css("width")
	}
	function B() {
		var H = $("<div></div>");
		H.addClass("mainCon");
		return H
	}
	function k(H) {
		var I = $("<div></div>");
		I.attr("id", elm_id + "_container");
		I.addClass(H.containerClass);
		I.css( {});
		return I
	}
	function q(I) {
		var H = document.createElement("input");
		var K = $(H);
		K.attr("id", elm_id + "_input");
		K.attr("type", "text");
		K.addClass(I.inputClass);
		K.attr("autocomplete", "off");
		var J = false;
		if (A.attr("editable") != null) {
			if (A.attr("editable") == "true") {
				J = true
			} else {
				J = false
			}
		}
		if (!J) {
			K.attr("readonly", "readonly")
		} else {
			K.attr("readonly", false)
		}
		K.attr("tabIndex", A.attr("tabindex"));
		if (A.attr("disabled") == true) {
			K.attr("disabled", true);
			K.addClass("inputDisabled")
		}
		return K
	}
	function o(I) {
		var H = $("li", x);
		if (!H || H.length == 0) {
			return false
		}
		i += I;
		if (i < 0) {
			i = H.size()
		} else {
			if (i > H.size()) {
				i = 0
			}
		}
		a(H, i);
		H.removeClass(c.hoverClass);
		$(H[i]).addClass(c.hoverClass)
	}
	function a(I, J) {
		var H = $(I[J]).get(0);
		var I = x.get(0);
		if (H.offsetTop + H.offsetHeight > I.scrollTop + I.clientHeight) {
			I.scrollTop = H.offsetTop + H.offsetHeight - I.clientHeight
		} else {
			if (H.offsetTop < I.scrollTop) {
				I.scrollTop = H.offsetTop
			}
		}
	}
	function h() {
		var H = $("li." + c.currentClass, x).get(0);
		var I = (H.id).split("_");
		var K = I[0].length + I[1].length + 2;
		var L = H.id;
		var J = L.substr(K, L.length);
		A.val(J);
		A.attr("relText", $(H).text());
		d.val($(H).html());
		if (v == true) {
			A.attr("editValue", d.val())
		}
		A.focus();
		return true
	}
	function s() {
		return A.val()
	}
	function m() {
		return d.val()
	}
	function r(N) {
		var O = new Array();
		var K = document.createElement("ul");
		var M = [];
		var I = 0;
		var H;
		if (A.attr("childId") != null) {
			H = true
		}
		var J = 1;
		var L;
		if (A.attr("colNum") != null) {
			J = parseInt(A.attr("colNum"))
		}
		if (A.attr("colWidth") != null) {
			L = Number(A.attr("colWidth"))
		}
		A.find("option").each(
				function() {
					M.push($(this)[0]);
					var P = document.createElement("li");
					P.setAttribute("id", N + "_" + $(this).val());
					P.innerHTML = $(this).html();
					if ($(this).is(":selected")) {
						var Q;
						if (A.attr("editable") != null) {
							if (A.attr("editable") == "true") {
								Q = true
							} else {
								Q = false
							}
						}
						if (Q == true) {
							d.val("请输入或选择");
							d.addClass("tipColor");
							d.focus(function() {
								if ($(this).val() == "请输入或选择") {
									$(this).val("");
									d.removeClass("tipColor")
								}
							});
							d.blur(function() {
								if ($(this).val() == "") {
									$(this).val("请输入或选择");
									d.addClass("tipColor")
								}
							})
						} else {
							d.val($(this).html());
							$(P).addClass(c.currentClass)
						}
					}
					if (J != 1) {
						$(P).addClass("li_left");
						if (L != null) {
							$(P).width(L)
						} else {
							var R = Number(C);
							$(P).width(R)
						}
					}
					K.appendChild(P);
					$(P).mouseover(function(S) {
						D = 1;
						if (c.debug) {
							console.log("over on : " + this.id)
						}
						jQuery(S.target, x).addClass(c.hoverClass)
					}).mouseout(function(S) {
						D = -1;
						if (c.debug) {
							console.log("out on : " + this.id)
						}
						jQuery(S.target, x).removeClass(c.hoverClass)
					}).click(
							function(T) {
								var U = $("li." + c.hoverClass, x).get(0);
								if (c.debug) {
									console.log("click on :" + this.id)
								}
								var S = $(this).attr("id").split("_");
								$(
										"#" + S[0] + "_container li."
												+ c.currentClass).removeClass(
										c.currentClass);
								$(this).addClass(c.currentClass);
								h();
								A.get(0).blur();
								l();
								if (A.attr("onchange") != null) {
									$(A.attr("onchange"))
								}
								d.removeClass("tipColor");
								if (H) {
									t(A, A.val())
								}
							})
				});
		A.find("optgroup")
				.each(
						function() {
							var Q = getPosition($(this).children("option")
									.eq(0)[0], M);
							var P = $(this).attr("label");
							$(K).find("li").eq(Q + I).before(
									"<li class='group'>" + P + "</li>");
							I++
						});
		return K
	}
	function t(J, I) {
		if (I != "") {
			var K = J.attr("childId");
			var H = $("#" + K).prev().find("div[class=loader]");
			H.show();
			window.setTimeout(function() {
				z(J, I)
			}, 200)
		}
	}
	function z(J, I) {
		var H;
		if (J.attr("childDataType") == null) {
			H = J.attr("childDataPath") + I
		} else {
			if (J.attr("childDataType") == "url") {
				H = J.attr("childDataPath") + I
			} else {
				H = J.attr("childDataPath") + I + "." + J.attr("childDataType")
			}
		}
		$
				.ajax( {
					url : H,
					error : function() {
						try {
							top.Dialog.alert("数据加载失败，请检查childDataPath是否正确")
						} catch (K) {
							alert("数据加载失败，请检查childDataPath是否正确")
						}
					},
					success : function(N) {
						var K = J.attr("childId");
						var S = $("#" + K).prev().find("div[class=loader]");
						S.hide();
						var Q = $("#" + K).prev().find("ul");
						var M = $("#" + K).prev().find(">div").attr("id")
								.split("_")[0];
						var L = $("#" + K).prev().find("input:text");
						var O = $("#" + K)[0];
						Q.html("");
						O.options.length = 0;
						$(N)
								.find("node")
								.each(
										function() {
											var V = $(this).attr("text");
											var U = $(this).attr("value");
											var T = document
													.createElement("li");
											$(T).text(V);
											$(T).attr("relValue", U);
											Q.append($(T));
											O.options[O.options.length] = new Option(
													V, U);
											$(T)
													.mouseover(
															function(W) {
																jQuery(W.target)
																		.addClass(
																				c.hoverClass)
															});
											$(T)
													.mouseout(
															function(W) {
																jQuery(W.target)
																		.removeClass(
																				c.hoverClass)
															});
											$(T)
													.mousedown(
															function(X) {
																$(
																		"#"
																				+ M
																				+ "_container li."
																				+ c.currentClass)
																		.removeClass(
																				c.currentClass);
																$(this)
																		.addClass(
																				c.currentClass);
																$("#" + K)
																		.attr(
																				"relText",
																				$(
																						this)
																						.text());
																$("#" + K)
																		.val(
																				$(
																						this)
																						.attr(
																								"relValue"));
																L
																		.val($(
																				this)
																				.html());
																$("#" + K)
																		.prev()
																		.find(
																				">div")
																		.hide();
																$("#" + K)
																		.focus();
																if ($("#" + K)
																		.attr(
																				"onchange") != null) {
																	$($("#" + K)
																			.attr(
																					"onchange"))
																}
																var W;
																if ($("#" + K)
																		.attr(
																				"childId") != null) {
																	W = true
																}
																if (W) {
																	t(
																			$("#"
																					+ K),
																			$(
																					"#"
																							+ K)
																					.val())
																}
															})
										});
						if ($(N).find("node").length == 0) {
							var R = document.createElement("li");
							$(R).text("无内容");
							Q.append($(R))
						}
						var P = Q.find("li").eq(0);
						L.val(P.text());
						P.addClass(c.currentClass);
						$("#" + K).attr("relValue", P.attr("relValue"));
						$("#" + K).attr("relText", P.text())
					}
				})
	}
};
function selRefresh(a) {
	var b;
	if (typeof (a) == "object") {
		b = a
	} else {
		b = $("#" + a)
	}
	b.prev(".mainCon").remove();
	b.selectbox()
}
function getPosition(b, c) {
	for ( var a = 0; a < c.length; a++) {
		if (b == c[a]) {
			return a;
			break
		}
	}
};
