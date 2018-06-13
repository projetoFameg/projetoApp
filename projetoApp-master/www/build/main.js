webpackJsonp([9],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutProgramProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(51);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkoutProgramProvider = /** @class */ (function () {
    function WorkoutProgramProvider(db, auth) {
        this.db = db;
        this.auth = auth;
        this.PATH = 'workoutProgram/';
    }
    WorkoutProgramProvider.prototype.getAll = function () {
        return this.db.list(this.PATH + this.auth.auth.currentUser.uid)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    WorkoutProgramProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + this.auth.auth.currentUser.uid)
            .snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    WorkoutProgramProvider.prototype.save = function (workoutProgram) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (workoutProgram.key) {
                _this.db.list(_this.PATH + _this.auth.auth.currentUser.uid)
                    .update(workoutProgram.key, {
                    titulo: workoutProgram.titulo,
                    objetivo: workoutProgram.objetivo,
                    grupoMuscular: workoutProgram.grupoMuscular,
                    grupoMuscular2: workoutProgram.grupoMuscular2
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH + _this.auth.auth.currentUser.uid)
                    .push({
                    titulo: workoutProgram.titulo,
                    objetivo: workoutProgram.objetivo,
                    grupoMuscular: workoutProgram.grupoMuscular,
                    grupoMuscular2: workoutProgram.grupoMuscular2
                })
                    .then(function () { return resolve(); });
            }
        });
    };
    WorkoutProgramProvider.prototype.remove = function (key) {
        this.db.list('WorkoutProgramExercise/').remove(key);
        return this.db.list(this.PATH + this.auth.auth.currentUser.uid).remove(key);
    };
    WorkoutProgramProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
    ], WorkoutProgramProvider);
    return WorkoutProgramProvider;
    var _a, _b;
}());

//# sourceMappingURL=workout-program.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkoutProgramExerciseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(48);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkoutProgramExerciseProvider = /** @class */ (function () {
    function WorkoutProgramExerciseProvider(db) {
        this.db = db;
        this.PATH = 'WorkoutProgramExercise/';
    }
    WorkoutProgramExerciseProvider.prototype.getAll = function (keyProgram) {
        return this.db.list(this.PATH + keyProgram)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    WorkoutProgramExerciseProvider.prototype.get = function (key, keyProgram) {
        console.log(this.PATH + " " + keyProgram + " " + key);
        return this.db.object(this.PATH + keyProgram)
            .snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    WorkoutProgramExerciseProvider.prototype.save = function (WorkoutProgramExercise, keyProgram) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (WorkoutProgramExercise.key) {
                _this.db.list(_this.PATH + keyProgram)
                    .update(WorkoutProgramExercise.key, {
                    idExercicio: WorkoutProgramExercise.idExercicio,
                    serie: WorkoutProgramExercise.serie,
                    repeticao: WorkoutProgramExercise.repeticao,
                    carga: WorkoutProgramExercise.carga
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH + keyProgram)
                    .push({
                    idExercicio: WorkoutProgramExercise.idExercicio,
                    serie: WorkoutProgramExercise.serie,
                    repeticao: WorkoutProgramExercise.repeticao,
                    carga: WorkoutProgramExercise.carga
                })
                    .then(function () { return resolve(); });
            }
        });
    };
    WorkoutProgramExerciseProvider.prototype.remove = function (key, keyProgram) {
        return this.db.list(this.PATH + keyProgram).remove(key);
    };
    WorkoutProgramExerciseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], WorkoutProgramExerciseProvider);
    return WorkoutProgramExerciseProvider;
}());

//# sourceMappingURL=workout-program-exercise.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(51);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(db, auth) {
        this.db = db;
        this.auth = auth;
        this.PATH = 'profile/';
        //this.PATH += this.auth.auth.currentUser.uid;
    }
    // this.db.list('caminho' + this.auth.auth.currentUser.uid).push(data);
    ProfileProvider.prototype.getAll = function () {
        return this.db.list(this.PATH + this.auth.auth.currentUser.uid)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (m) { return (__assign({ key: m.key }, m.payload.val())); });
        });
    };
    ProfileProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + this.auth.auth.currentUser.uid)
            .snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    ProfileProvider.prototype.save = function (profile) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (profile.key) {
                _this.db.list(_this.PATH + _this.auth.auth.currentUser.uid)
                    .update(profile.key, {
                    nome: profile.nome,
                    sobrenome: profile.sobrenome,
                    idade: profile.idade,
                    altura: profile.altura,
                    peso: profile.peso,
                    circuCintura: profile.circuCintura,
                    circuBracoDireito: profile.circuBracoDireito,
                    circuBracoEsquerdo: profile.circuBracoEsquerdo,
                    objetivo: profile.objetivo,
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH + _this.auth.auth.currentUser.uid)
                    .push({
                    nome: profile.nome,
                    sobrenome: profile.sobrenome,
                    altura: profile.altura,
                    peso: profile.peso,
                    idade: profile.idade,
                    circuCintura: profile.circuCintura,
                    circuBracoEsquerdo: profile.circuBracoEsquerdo,
                    circuBracoDireito: profile.circuBracoDireito,
                    objetivo: profile.objetivo,
                })
                    .then(function () { return resolve(); });
            }
        });
    };
    ProfileProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH + this.auth.auth.currentUser.uid).remove(key);
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(navCtrl, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.userEmail = '';
    }
    ResetpasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.resetPassword(this.userEmail)
                .then(function () {
                toast_1.setMessage("Solicitação foi enviada para seu e-mail!");
                toast_1.present();
                _this.navCtrl.pop();
            })
                .catch(function (error) {
                if (error.code == 'auth/invalid-email') {
                    toast_1.setMessage('O e-mail é inválido');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast_1.setMessage('O usuário não existe');
                }
                toast_1.present();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
    ], ResetpasswordPage.prototype, "form", void 0);
    ResetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpassword',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\resetpassword\resetpassword.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Resetar minha senha\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" novalidate>\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="userEmail" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="resetPassword()">\n      Resetar minha senha\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\resetpassword\resetpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthServiceProvider */]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddExercisePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exercise_exercise__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddExercisePage = /** @class */ (function () {
    function AddExercisePage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.exercise = this.navParams.data.exercise || {};
        this.createForm();
        this.setupPageTitle();
    }
    AddExercisePage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.exercise ? 'Alterar Exercício' : 'Adicionar Exercicio';
    };
    AddExercisePage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.exercise.key],
            NomeExercicio: [this.exercise.NomeExercicio, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
        });
    };
    AddExercisePage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Exercício salvo com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o exercício.', duration: 3000 }).present();
                console.log(e);
            });
        }
    };
    AddExercisePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-exercise',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\add-exercise\add-exercise.html"*/'<!--\n  Generated template for the AddExercisePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="bg">\n\n  <form [formGroup]="form">\n\n    <ion-item>\n      <ion-label stacked>Nome do exercício</ion-label>\n      <ion-input type="text" formControlName="NomeExercicio"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.NomeExercicio.valid && (form.controls.NomeExercicio.dirty || form.controls.NomeExercicio.touched)" color="danger">\n      <div [hidden]="!form.controls.NomeExercicio.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n      \n       \n   \n        \n       \n        <!-- <ion-item>\n          <ion-label stacked>Imagem</ion-label>\n          <ion-input ngControl="image" type="file" placeholder="Select Category Image" [(ngModel)]="exerciseItem.imagem"></ion-input>\n        </ion-item> -->\n      \n        <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Add Exercício</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\add-exercise\add-exercise.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_exercise_exercise__["a" /* ExerciseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], AddExercisePage);
    return AddExercisePage;
}());

//# sourceMappingURL=add-exercise.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContatoPage = /** @class */ (function () {
    function ContatoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContatoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContatoPage');
    };
    ContatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contato',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\contato\contato.html"*/'<!--\n  Generated template for the ContatoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n    <ion-title>Contato</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg">\n\n  <html>\n    <body>\n   \n    <div class="hr"> \n    <address>\n      <h5><b>Sugestões ou problemas nos contate:</b></h5>\n      <h6><b> E-mail:  Projetos.orientados@gmail.com</b></h6>\n  \n    </address>\n    </div>\n\n    </body>\n    </html>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\contato\contato.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContatoPage);
    return ContatoPage;
}());

//# sourceMappingURL=contato.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.profile = this.navParams.data.profile || {};
        this.createForm();
        this.setupPageTitle();
    }
    EditProfilePage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.profile ? 'Atualizar Perfil' : 'Adicionar Informação';
    };
    EditProfilePage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.profile.key],
            nome: [this.profile.nome],
            sobrenome: [this.profile.sobrenome],
            altura: [this.profile.altura],
            peso: [this.profile.peso],
            idade: [this.profile.equipamento],
            circuCintura: [this.profile.circuCintura],
            circuBracoEsquerdo: [this.profile.circuBracoEsquerdo],
            circuBracoDireito: [this.profile.circuBracoDireito],
            objetivo: [this.profile.objetivo],
        });
    };
    EditProfilePage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Perfil salvo com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o alterações.', duration: 3000 }).present();
                console.log(e);
            });
        }
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\edit-profile\edit-profile.html"*/'\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n   \n    <form [formGroup]="form">\n           \n          <ion-item>\n              <ion-label stacked>Nome</ion-label>\n              <ion-input type="text" formControlName="nome"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="!form.controls.nome.valid && (form.controls.nome.dirty || form.controls.nome.touched)" color="danger">\n                <div [hidden]="!form.controls.nome.errors.required">\n                  O campo é obrigatório\n                </div>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label stacked>Sobrenome</ion-label>\n                  <ion-input type="text" formControlName="sobrenome"></ion-input>\n                </ion-item>\n                <ion-item *ngIf="!form.controls.sobrenome.valid && (form.controls.sobrenome.dirty || form.controls.sobrenome.touched)" color="danger">\n                    <div [hidden]="!form.controls.sobrenome.errors.required">\n                      O campo é obrigatório\n                    </div>\n                  </ion-item>\n\n                  <ion-item>\n                      <ion-label stacked>Altura</ion-label>\n                      <ion-input type="text" formControlName="altura"></ion-input>\n                    </ion-item>\n                    <ion-item *ngIf="!form.controls.altura.valid && (form.controls.altura.dirty || form.controls.altura.touched)" color="danger">\n                        <div [hidden]="!form.controls.altura.errors.required">\n                          O campo é obrigatório\n                        </div>\n                      </ion-item>\n\n\n                <ion-item>\n                    <ion-label stacked>Peso</ion-label>\n                    <ion-input type="text" formControlName="peso"></ion-input>\n                  </ion-item>\n                  <ion-item *ngIf="!form.controls.peso.valid && (form.controls.peso.dirty || form.controls.peso.touched)" color="danger">\n                      <div [hidden]="!form.controls.peso.errors.required">\n                        O campo é obrigatório\n                      </div>\n                    </ion-item>\n\n\n\n                  <ion-item>\n                      <ion-label stacked>idade</ion-label>\n                      <ion-input type="text" formControlName="idade"></ion-input>\n                    </ion-item>\n                    <ion-item *ngIf="!form.controls.idade.valid && (form.controls.idade.dirty || form.controls.idade.touched)" color="danger">\n                        <div [hidden]="!form.controls.idade.errors.required">\n                          O campo é obrigatório\n                        </div>\n                      </ion-item>\n\n\n                    <ion-item>\n                        <ion-label stacked>Circuferência Cintura</ion-label>\n                        <ion-input type="text" formControlName="circuCintura"></ion-input>\n                      </ion-item>\n                      <ion-item *ngIf="!form.controls.circuCintura.valid && (form.controls.circuCintura.dirty || form.controls.circuCintura.touched)" color="danger">\n                          <div [hidden]="!form.controls.circuCintura.errors.required">\n                            O campo é obrigatório\n                          </div>\n                        </ion-item>\n\n\n                      <ion-item>\n                          <ion-label stacked>Circuferência Braço Esquerdo</ion-label>\n                          <ion-input type="text" formControlName="circuBracoEsquerdo"></ion-input>\n                        </ion-item>\n                        <ion-item *ngIf="!form.controls.circuBracoEsquerdo.valid && (form.controls.circuBracoEsquerdo.dirty || form.controls.circuBracoEsquerdo.touched)" color="danger">\n                            <div [hidden]="!form.controls.circuBracoEsquerdo.errors.required">\n                              O campo é obrigatório\n                            </div>\n                          </ion-item>\n                    \n\n                        <ion-item>\n                            <ion-label stacked>Circuferência Braço Direito</ion-label>\n                            <ion-input type="text" formControlName="circuBracoDireito"></ion-input>\n                          </ion-item>\n                          <ion-item *ngIf="!form.controls.circuBracoDireito.valid && (form.controls.circuBracoDireito.dirty || form.controls.circuBracoDireito.touched)" color="danger">\n                              <div [hidden]="!form.controls.circuBracoDireito.errors.required">\n                                O campo é obrigatório\n                              </div>\n                            </ion-item>\n        \n                            <ion-item>\n                                <ion-label stacked>Objetivo</ion-label>\n                                <ion-select formControlName="objetivo">\n                                  <ion-option value="1">Ganho de massa muscular</ion-option>\n                                  <ion-option value="2">Resistência</ion-option>\n                                  <ion-option value="2">Perca de gordura</ion-option>\n                                </ion-select>\n                              </ion-item>\n                              <ion-item *ngIf="!form.controls.objetivo.valid && (form.controls.objetivo.dirty || form.controls.objetivo.touched)" color="danger">\n                                  <div [hidden]="!form.controls.objetivo.errors.required">\n                                    O campo é obrigatório\n                                  </div>\n                                </ion-item>\n                            \n          <!-- <ion-item>\n            <ion-label stacked>Imagem</ion-label>\n            <ion-input ngControl="image" type="file" placeholder="Select Category Image" [(ngModel)]="exerciseItem.imagem"></ion-input>\n          </ion-item> -->\n        \n          <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Atualizar Perfil</button>\n    </form>\n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__["a" /* User */]();
    }
    SignupPage.prototype.createAccount = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.createUser(this.user)
                .then(function (user) {
                user.sendEmailVerification();
                toast_1.setMessage('Usuário criado com sucesso.');
                toast_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                if (error.code == 'auth/email-already-in-use') {
                    toast_1.setMessage('O e-mail digitado já está em uso.');
                }
                else if (error.code == 'auth/invalid-email') {
                    toast_1.setMessage('O e-mail digitado não é valido.');
                }
                else if (error.code == 'auth/operation-not-allowed') {
                    toast_1.setMessage('Não está habilitado criar usuários.');
                }
                else if (error.code == 'auth/weak-password') {
                    toast_1.setMessage('A senha digitada é muito fraca.');
                }
                toast_1.present();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgForm */])
    ], SignupPage.prototype, "form", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Criar nova conta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" novalidate>\n    <ion-list>\n\n    \n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="password.errors && (password.dirty || password.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="createAccount()">\n      Criar conta\n    </button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthServiceProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-exercise/add-exercise.module": [
		523,
		8
	],
	"../pages/add-workout-program/add-workout-program.module": [
		524,
		7
	],
	"../pages/contato/contato.module": [
		525,
		6
	],
	"../pages/edit-profile/edit-profile.module": [
		526,
		5
	],
	"../pages/list-workout-program/list-workout-program.module": [
		527,
		4
	],
	"../pages/resetpassword/resetpassword.module": [
		528,
		3
	],
	"../pages/signin/signin.module": [
		529,
		2
	],
	"../pages/signinwithemail/signinwithemail.module": [
		530,
		0
	],
	"../pages/signup/signup.module": [
		531,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 220;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWorkoutexercisePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exercise_exercise__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_workout_program_exercise_workout_program_exercise__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_workout_program_add_workout_program__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddWorkoutexercisePage = /** @class */ (function () {
    function AddWorkoutexercisePage(navCtrl, navParams, formBuilder, provider, providerExercise, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.providerExercise = providerExercise;
        this.toast = toast;
        this.exercise = this.provider.getAll();
        this.keyProgram = this.navParams.data.keyProgram || {};
        this.workoutProgramExercise = this.navParams.data.workoutProgramExercise || {};
        console.log(this.keyProgram);
        this.createForm();
        this.setupPageTitle();
    }
    AddWorkoutexercisePage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.workoutProgran ? 'Alterar Exercícios' : 'Adicionar Exercícios';
    };
    AddWorkoutexercisePage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.workoutProgramExercise.key],
            idExercicio: [this.workoutProgramExercise.idExercicio, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required],
            serie: [this.workoutProgramExercise.serie],
            repeticao: [this.workoutProgramExercise.repeticao],
            carga: [this.workoutProgramExercise.carga]
        });
    };
    AddWorkoutexercisePage.prototype.navigateAddWorkoutexercisePage = function () {
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_4__add_workout_program_add_workout_program__["a" /* AddWorkoutProgramPage */]);
    };
    AddWorkoutexercisePage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.providerExercise.save(this.form.value, this.keyProgram)
                .then(function () {
                _this.toast.create({ message: 'Exercício salvo com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o Exercício.', duration: 3000 }).present();
                console.log(e);
            });
        }
    };
    AddWorkoutexercisePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-workout-exercise',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\add-workout-exercise\add-workout-exercise.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Adicionar Exercício ao treino:</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg">\n\n  <form [formGroup]="form">\n        \n          <ion-item>\n            <ion-label stacked>Exercício</ion-label>\n            <ion-select formControlName="idExercicio">\n              <ion-option *ngFor="let exercise of exercise | async" value="{{exercise.key}}">{{exercise.NomeExercicio}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item *ngIf="!form.controls.idExercicio.valid && (form.controls.idExercicio.dirty || form.controls.idExercicio.touched)" color="danger">\n              <div [hidden]="!form.controls.idExercicio.errors.required">\n                O campo é obrigatório\n              </div>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label stacked>Série</ion-label>\n            <ion-input type="text" formControlName="serie"></ion-input>\n          </ion-item>\n           \n          <ion-item>\n            <ion-label stacked>Repetição</ion-label>\n            <ion-input type="text" formControlName="repeticao"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label stacked>Carga</ion-label>\n            <ion-input type="text" formControlName="carga"></ion-input>\n          </ion-item>\n\n          <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Add Exercício</button>\n    </form>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\add-workout-exercise\add-workout-exercise.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_exercise_exercise__["a" /* ExerciseProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_workout_program_exercise_workout_program_exercise__["a" /* WorkoutProgramExerciseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], AddWorkoutexercisePage);
    return AddWorkoutexercisePage;
}());

//# sourceMappingURL=add-workout-exercise.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileListPage = /** @class */ (function () {
    function ProfileListPage(navCtrl, navParams, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.toast = toast;
        this.profile = this.provider.getAll();
    }
    ProfileListPage.prototype.navigateEditProfilePage = function () {
        // Navegar o usuário para a AddExercisePage
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    ProfileListPage.prototype.editProfile = function (profile) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__["a" /* EditProfilePage */], { profile: profile });
    };
    ProfileListPage.prototype.removeProfile = function (key) {
        var _this = this;
        this.provider.remove(key)
            .then(function () {
            _this.toast.create({ message: 'Informação removido com sucesso.', duration: 3000 }).present();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao remover o Informação.', duration: 3000 }).present();
        });
    };
    ProfileListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-list',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\profile-list\profile-list.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Seu perfil:</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n      <ion-fab right bottom>\n          <button ion-fab color="primary" (click)="navigateEditProfilePage()">\n            <ion-icon name="add"></ion-icon>\n          </button>\n      </ion-fab>\n  \n    <ion-list>\n      <ion-item-sliding *ngFor="let profile of profile | async">\n  \n        <ion-item>\n            <h2><p>Nome: </p>{{profile.nome}} </h2>\n            <h2><p>Sobrenome: </p>{{profile.sobrenome}} </h2>\n            <h3><p>Idade: </p>{{profile.idade}}</h3>\n            <h3><p>Altura: </p>{{profile.altura}}</h3>\n            <h3><p>Peso: </p>{{profile.peso}}</h3>\n            <h3><p>Circuferência Cintura: </p>{{profile.circuCintura}}</h3>\n            <h3><p>Circuferência Braço Direito: </p>{{profile.circuBracoDireito}}</h3>\n            <h3><p>Circuferência Braço Esquerdo: </p>{{profile.circuBracoEsquerdo}}</h3>\n            <h3><p>Objetivo: </p>{{profile.objetivo}}</h3>\n\n        </ion-item>\n  \n  \n        <ion-item-options side="left">\n            <button ion-button color="secondary" (click)="editProfile(profile)">\n              <ion-icon name="create"></ion-icon>\n            </button>\n          <button ion-button color="danger" (click)="removeProfile(profile.key)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n  \n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\profile-list\profile-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ProfileListPage);
    return ProfileListPage;
}());

//# sourceMappingURL=profile-list.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_exercise_add_exercise__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_exercise_exercise__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExerciseListPage = /** @class */ (function () {
    function ExerciseListPage(navCtrl, navParams, provider, authService, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.authService = authService;
        this.toast = toast;
        this.exercise = this.provider.getAll();
    }
    ExerciseListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExerciseListPage');
    };
    ExerciseListPage.prototype.navigateAddExercisePage = function () {
        // Navegar o usuário para a AddExercisePage
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_exercise_add_exercise__["a" /* AddExercisePage */]);
    };
    ExerciseListPage.prototype.editExercise = function (exercise) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_exercise_add_exercise__["a" /* AddExercisePage */], { exercise: exercise });
    };
    ExerciseListPage.prototype.removeExercise = function (key) {
        var _this = this;
        this.provider.remove(key)
            .then(function () {
            _this.toast.create({ message: 'Exercicio removido com sucesso.', duration: 3000 }).present();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao remover o exercício.', duration: 3000 }).present();
        });
    };
    // Criado para o admin fazer logout
    ExerciseListPage.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut()
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__signin_signin__["a" /* SigninPage */]);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    ExerciseListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exercise-list',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\exercise-list\exercise-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Lista de Exercícios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-fab right bottom>\n        <button ion-fab color="primary" (click)="navigateAddExercisePage()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let exercise of exercise | async">\n\n      <ion-item>\n          <h1>{{exercise.NomeExercicio}}</h1>\n          \n      </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button color="secondary" (click)="editExercise(exercise)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button color="danger" (click)="removeExercise(exercise.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n        \n      </ion-item-options>\n\n      \n    </ion-item-sliding>\n  </ion-list>\n  \n      <ion-fab bottom left>\n        <button ion-button round color="primary" (click)="signOut()"> logout   -\n          <ion-icon name="md-exit"></ion-icon>\n        </button>\n      </ion-fab>\n      \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\exercise-list\exercise-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_exercise_exercise__["a" /* ExerciseProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ExerciseListPage);
    return ExerciseListPage;
}());

//# sourceMappingURL=exercise-list.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(350);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//enableProdMode();
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_servicenpm_auth_servicenpm__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_resetpassword_resetpassword__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_exercise_add_exercise__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_exercise_list_exercise_list__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_edit_profile_edit_profile__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_list_profile_list__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_exercise_exercise__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_workout_program_workout_program__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_workout_program_exercise_workout_program_exercise__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_add_workout_program_add_workout_program__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_list_workout_program_list_workout_program__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_workout_exercise_add_workout_exercise__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_facebook__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_plus__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_profile_profile__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_treino_treino__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_contato_contato__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var firebaseConfig = {
    apiKey: "AIzaSyAJSb_bRCzXH5VwTkDI5Toz2Z2Hv3TB1q0",
    authDomain: "workout-e5dc5.firebaseapp.com",
    databaseURL: "https://workout-e5dc5.firebaseio.com",
    projectId: "workout-e5dc5",
    storageBucket: "workout-e5dc5.appspot.com",
    messagingSenderId: "543412652932"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_exercise_add_exercise__["a" /* AddExercisePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_exercise_list_exercise_list__["a" /* ExerciseListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_list_profile_list__["a" /* ProfileListPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_contato_contato__["a" /* ContatoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_add_workout_program_add_workout_program__["a" /* AddWorkoutProgramPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_list_workout_program_list_workout_program__["a" /* ListWorkoutProgramPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_workout_exercise_add_workout_exercise__["a" /* AddWorkoutexercisePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-exercise/add-exercise.module#AddExercisePageModule', name: 'AddExercisePage', segment: 'add-exercise', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-workout-program/add-workout-program.module#AddWorkoutProgramPageModule', name: 'AddWorkoutProgramPage', segment: 'add-workout-program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contato/contato.module#ContatoPageModule', name: 'ContatoPage', segment: 'contato', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-workout-program/list-workout-program.module#ListWorkoutProgramPageModule', name: 'ListWorkoutProgramPage', segment: 'list-workout-program', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpassword/resetpassword.module#ResetpasswordPageModule', name: 'ResetpasswordPage', segment: 'resetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#LoginPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signinwithemail/signinwithemail.module#LoginPageModule', name: 'SigninWithEmailPage', segment: 'signinwithemail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_exercise_add_exercise__["a" /* AddExercisePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_exercise_list_exercise_list__["a" /* ExerciseListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_list_profile_list__["a" /* ProfileListPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_contato_contato__["a" /* ContatoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_add_workout_program_add_workout_program__["a" /* AddWorkoutProgramPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_list_workout_program_list_workout_program__["a" /* ListWorkoutProgramPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_workout_exercise_add_workout_exercise__["a" /* AddWorkoutexercisePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_servicenpm_auth_servicenpm__["a" /* AuthServicenpmProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_18__providers_exercise_exercise__["a" /* ExerciseProvider */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_27__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_treino_treino__["a" /* TreinoProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_workout_program_workout_program__["a" /* WorkoutProgramProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_workout_program_exercise_workout_program_exercise__["a" /* WorkoutProgramExerciseProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(angularFireAuth, googlePlus, facebook) {
        this.angularFireAuth = angularFireAuth;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.user = angularFireAuth.authState;
    }
    AuthServiceProvider.prototype.createUser = function (user) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    AuthServiceProvider.prototype.signInWithAdmin = function (user) {
        if (user.email == "cleverton_decker@hotmail.com") {
            return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
        }
    };
    AuthServiceProvider.prototype.SignIn = function (user) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    /*
     signInWithFacebook() {
       return this.facebook.login(['public_profile', 'email'])
         .then((res: FacebookLoginResponse) => {
           //https://developers.facebook.com/docs/graph-api/reference/user
           //Ao logar com o facebook o profile do usuario é automaticamente atualizado.
           return this.angularFireAuth.auth.signInWithCredential(firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken));
         });
   }
   */
    AuthServiceProvider.prototype.signInWithGoogle = function () {
        console.log('Sign in with google');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthServiceProvider.prototype.oauthSignIn = function (provider) {
        var _this = this;
        if (!window.cordova) {
            return this.angularFireAuth.auth.signInWithPopup(provider);
        }
        else {
            return this.angularFireAuth.auth.signInWithRedirect(provider)
                .then(function () {
                return _this.angularFireAuth.auth.getRedirectResult().then(function (result) {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    console.log(token, user);
                }).catch(function (error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    };
    AuthServiceProvider.prototype.signOut = function () {
        var _this = this;
        if (this.angularFireAuth.auth.currentUser.providerData.length) {
            for (var i = 0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++)
                var provider = this.angularFireAuth.auth.currentUser.providerData[i];
            //if Auth with Google
            if (provider.providerId == __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider.PROVIDER_ID) {
                return this.googlePlus.logout()
                    .then(function () {
                    return _this.signOutFirebase();
                });
                //if Auth with Facebook
            }
            else if (provider.providerId == __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider.PROVIDER_ID) {
                return this.facebook.logout()
                    .then(function () {
                    return _this.signOutFirebase();
                });
            }
        }
        return this.signOutFirebase();
    };
    AuthServiceProvider.prototype.signOutFirebase = function () {
        return this.angularFireAuth.auth.signOut();
    };
    AuthServiceProvider.prototype.resetPassword = function (email) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServicenpmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthServicenpmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServicenpmProvider = /** @class */ (function () {
    function AuthServicenpmProvider(http) {
        this.http = http;
        console.log('Hello AuthServicenpmProvider Provider');
    }
    AuthServicenpmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServicenpmProvider);
    return AuthServicenpmProvider;
}());

//# sourceMappingURL=auth-servicenpm.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_workout_program_list_workout_program__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                authObserver.unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
                authObserver.unsubscribe();
            }
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Treinos', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_workout_program_list_workout_program__["a" /* ListWorkoutProgramPage */] }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreinoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(51);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreinoProvider = /** @class */ (function () {
    function TreinoProvider(db, auth) {
        this.db = db;
        this.auth = auth;
        this.PATH = 'treino/';
    }
    TreinoProvider.prototype.getAll = function () {
        return this.db.list(this.PATH + this.auth.auth.currentUser.uid)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    TreinoProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + this.auth.auth.currentUser.uid)
            .snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    TreinoProvider.prototype.save = function (treino, exercise) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (treino.key) {
                _this.db.list(_this.PATH + _this.auth.auth.currentUser.uid)
                    .update(treino.key, {
                    diaSemana: treino.diaSemana,
                    NomeExercicio: treino.NomeExercicio,
                    descricao: treino.descricao,
                    equipamento: treino.equipamento,
                    grupoMuscular: treino.grupoMuscular,
                    repeticoes: treino.repeticoes,
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH + _this.auth.auth.currentUser.uid)
                    .push({
                    diaSemana: treino.diaSemana,
                    NomeExercicio: treino.NomeExercicio,
                    descricao: treino.descricao,
                    equipamento: treino.equipamento,
                    grupoMuscular: treino.grupoMuscular,
                    repeticoes: treino.repeticoes,
                })
                    .then(function () { return resolve(); });
            }
        });
    };
    TreinoProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH + this.auth.auth.currentUser.uid).remove(key);
    };
    TreinoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], TreinoProvider);
    return TreinoProvider;
}());

//# sourceMappingURL=treino.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(48);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExerciseProvider = /** @class */ (function () {
    function ExerciseProvider(db) {
        this.db = db;
        this.PATH = 'exercise/';
    }
    ExerciseProvider.prototype.getAll = function () {
        return this.db.list(this.PATH)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ExerciseProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key)
            .snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    ExerciseProvider.prototype.save = function (exercise) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (exercise.key) {
                _this.db.list(_this.PATH)
                    .update(exercise.key, {
                    NomeExercicio: exercise.NomeExercicio,
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({
                    NomeExercicio: exercise.NomeExercicio,
                })
                    .then(function () { return resolve(); });
            }
        });
    };
    ExerciseProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    ExerciseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ExerciseProvider);
    return ExerciseProvider;
}());

//# sourceMappingURL=exercise.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__exercise_list_exercise_list__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, toastCtrl, authService, facebook) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.facebook = facebook;
        this.userProfile = null;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__["a" /* User */]();
    }
    SigninPage.prototype.signInWithFacebook = function () {
        var _this = this;
        this.facebook.login(['email']).then(function (response) {
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.auth.FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_9_firebase___default.a.auth().signInWithCredential(facebookCredential)
                .then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
                _this.userProfile = success;
            })
                .catch(function (error) {
                console.log("Firebase failure: " + JSON.stringify(error));
            });
        }).catch(function (error) { console.log(error); });
    };
    SigninPage.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle()
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        })
            .catch(function (error) {
            var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            if (error.code == 'auth/ invalid-email') {
                toast.setMessage('O e-mail digitado não é valido!');
            }
            else if (error.code == 'auth/user-disabled') {
                toast.setMessage('O usuário está desativado');
            }
            else if (error.code == 'auth/user-not-found') {
                toast.setMessage('O usuário não existe');
            }
            else if (error.code == 'auth/wrong-password') {
                toast.setMessage('A senha está incorreta');
            }
            toast.present();
        });
    };
    SigninPage.prototype.resetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__["a" /* ResetpasswordPage */]);
    };
    SigninPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    // Login com usuario e senha / Login como administrador
    SigninPage.prototype.signIn = function (user) {
        var _this = this;
        if (this.authService.signInWithAdmin(this.user)) {
            this.authService.SignIn(this.user)
                .then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__exercise_list_exercise_list__["a" /* ExerciseListPage */]);
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                if (error.code == 'auth/ invalid-email') {
                    toast.setMessage('O e-mail digitado não é valido!');
                }
                else if (error.code == 'auth/user-disabled') {
                    toast.setMessage('O usuário está desativado');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast.setMessage('O usuário não existe');
                }
                else if (error.code == 'auth/wrong-password') {
                    toast.setMessage('A senha está incorreta');
                }
                toast.present();
            });
        }
        else if (this.form.form.valid) {
            this.authService.SignIn(this.user)
                .then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                if (error.code == 'auth/ invalid-email') {
                    toast.setMessage('O e-mail digitado não é valido!');
                }
                else if (error.code == 'auth/user-disabled') {
                    toast.setMessage('O usuário está desativado');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast.setMessage('O usuário não existe');
                }
                else if (error.code == 'auth/wrong-password') {
                    toast.setMessage('A senha está incorreta');
                }
                toast.present();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgForm */])
    ], SigninPage.prototype, "form", void 0);
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\signin\signin.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form #form="ngForm" novalidate>\n    <ion-list>\n     \n  \n\n        <ion-item>\n            <ion-label stacked>E-mail</ion-label>\n            <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input> \n          </ion-item>\n          <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n            O campo é obrigatório.\n          </ion-item>\n    \n          <ion-item>\n        <ion-label stacked>Senha</ion-label>\n        <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input> \n        O Campo é obrigatório.\n      </ion-item>\n\n      </ion-list>\n\n      <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="signIn()">\n        Entrar\n      </button>\n      \n     \n      <button ion-button block color="primary"  (click)="resetPassword()">\n        Alterar senha.\n      </button>\n\n\n      <button ion-button block icon-left color="facebook" margin-top (click)="signInWithFacebook()">\n          <ion-icon name="logo-facebook"></ion-icon>\n          Entrar com o Facebook\n        </button>\n     \n\n\n      <button ion-button block icon-left color="danger" margin-top (click)="signInWithGoogle()">\n        <ion-icon name="logo-google"></ion-icon>\n        Entrar com o Google\n      </button>\n\n    <button ion-button block color="primary"  (click)="createAccount()">\n        Criar conta\n      </button>\n\n   \n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_list_profile_list__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contato_contato__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_workout_program_list_workout_program__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
    }
    HomePage.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut()
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    HomePage.prototype.ProfileRedirect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_list_profile_list__["a" /* ProfileListPage */]);
    };
    HomePage.prototype.TreinoRedirect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__list_workout_program_list_workout_program__["a" /* ListWorkoutProgramPage */]);
    };
    HomePage.prototype.ContatoRedirect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contato_contato__["a" /* ContatoPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Workout!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg">\n  \n\n    <ion-menu [content]="content">\n        <ion-content class="bg-menu">\n          <ion-list >\n          <button ion-button  full color="primary" (click)="ProfileRedirect()"> \n                Perfil\n            </button>\n          </ion-list>\n          \n            <ion-list>\n            <button ion-button full  color="primary" (click)="TreinoRedirect()"> \n                Treino\n              </button>\n            </ion-list>\n\n          <ion-list>\n              <button ion-button full  color="primary" (click)="ContatoRedirect()"> \n                  Contato\n                </button>\n              </ion-list>\n            </ion-content>\n\n        </ion-menu>      \n      <ion-nav #content [root]="HomePage"></ion-nav>\n\n\n      <button ion-button class="bg-logout" around  color="primary" (click)="signOut()">\n          <ion-icon name="md-exit"></ion-icon>\n            Logout\n        </button>\n\n   <ion-buttons  start>\n   <button ion-button icon-only menuToggle>   \n    <ion-icon name="menu"></ion-icon>       Menu Principal \n  </button>\n  </ion-buttons>\n\n \n  <ion-footer>\n    <ion-toolbar> Copyright 2018\n      <ion-title></ion-title>\n    </ion-toolbar>\n  </ion-footer>\n\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWorkoutProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_workout_program_workout_program__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_workout_exercise_add_workout_exercise__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_workout_program_exercise_workout_program_exercise__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_exercise_exercise__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddWorkoutProgramPage = /** @class */ (function () {
    function AddWorkoutProgramPage(navCtrl, navParams, formBuilder, provider, providerExerciseProgram, providerExercise, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.providerExerciseProgram = providerExerciseProgram;
        this.providerExercise = providerExercise;
        this.toast = toast;
        this.listExercise = [];
        this.workoutProgram = this.navParams.data.workoutProgram || {};
        this.createForm();
        this.setupPageTitle();
        this.workoutProgramExercise = providerExerciseProgram.getAll(this.workoutProgram.key);
        this.getInfoExercise();
    }
    AddWorkoutProgramPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.workoutProgram ? 'Alterar Plano de Treino' : 'Adicionar Plano de Treino';
    };
    AddWorkoutProgramPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.workoutProgram.key],
            titulo: [this.workoutProgram.titulo, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            objetivo: [this.workoutProgram.objetivo, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            grupoMuscular: [this.workoutProgram.grupoMuscular, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            grupoMuscular2: [this.workoutProgram.grupoMuscular2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
        });
    };
    AddWorkoutProgramPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Plano de Treino salvo com sucesso.', duration: 3000 }).present();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o Plano de Treino.', duration: 3000 }).present();
                console.log(e);
            });
        }
    };
    AddWorkoutProgramPage.prototype.navigateAddWorkoutexercisePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_workout_exercise_add_workout_exercise__["a" /* AddWorkoutexercisePage */], { keyProgram: this.workoutProgram.key });
    };
    AddWorkoutProgramPage.prototype.getInfoExercise = function () {
        var _this = this;
        this.workoutProgramExercise.forEach(function (exerciseProgram) {
            exerciseProgram.forEach(function (exerciseWorkoutProgram) {
                var exercise = _this.providerExercise.get(exerciseWorkoutProgram.idExercicio);
                exercise.forEach(function (exercise) {
                    _this.listExercise.forEach(function (e) {
                        if (e.keyExercise == exerciseWorkoutProgram.key)
                            _this.listExercise.splice(e.key);
                    });
                    _this.addExercise(exerciseWorkoutProgram, exercise);
                });
            });
        });
    };
    AddWorkoutProgramPage.prototype.addExercise = function (exerciseWorkoutProgram, exercise) {
        this.listExercise.push({
            keyExercise: exerciseWorkoutProgram.key,
            nomeExercicio: exercise.NomeExercicio,
            grupoMuscular: exercise.grupoMuscular,
            grupoMuscular2: [this.workoutProgram.grupoMuscular2, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            serie: exerciseWorkoutProgram.serie,
            repeticao: exerciseWorkoutProgram.repeticao,
            carga: exerciseWorkoutProgram.carga
        });
    };
    AddWorkoutProgramPage.prototype.editExercise = function (keyParam) {
        var _this = this;
        this.workoutProgramExercise = this.providerExerciseProgram.get(keyParam, this.workoutProgram.key);
        this.workoutProgramExercise.map(function (exerciseWorkoutProgram) {
            console.log(exerciseWorkoutProgram);
            if (exerciseWorkoutProgram.key == keyParam) {
                return _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_workout_exercise_add_workout_exercise__["a" /* AddWorkoutexercisePage */], { keyProgram: _this.workoutProgram.key, workoutProgramExercise: exerciseWorkoutProgram });
            }
        });
    };
    AddWorkoutProgramPage.prototype.removeExercise = function (key) {
        var _this = this;
        this.providerExerciseProgram.remove(key, this.workoutProgram.key)
            .then(function () {
            _this.toast.create({ message: 'Exercício removido com sucesso.', duration: 3000 }).present();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao remover o exercício.', duration: 3000 }).present();
        });
    };
    AddWorkoutProgramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-workout-program',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\add-workout-program\add-workout-program.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n\n  <form [formGroup]="form">\n\n    <ion-item>\n      <ion-label stacked>Treinos Da Semana:</ion-label>\n      <ion-select formControlName="titulo">\n        <ion-option value="Segunda Feira">Segunda Feira</ion-option>\n        <ion-option value="Terça Feira">Terça Feira</ion-option>\n        <ion-option value="Quarta Feira">Quarta Feira</ion-option>\n        <ion-option value="Quinta Feira">Quinta Feira</ion-option>\n        <ion-option value="Sexta Feira">Sexta Feira</ion-option>\n        <ion-option value="Sábado">Sábado</ion-option>\n        <ion-option value="Domingo">Domingo</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n        <ion-label stacked>Objetivo:</ion-label>\n        <ion-select formControlName="objetivo">\n          <ion-option value="Emagrecimento">Emagrecimento</ion-option>\n          <ion-option value="Resistência Muscular">Resistência Muscular</ion-option>\n          <ion-option value="Hipertrofia Muscular">Hipertrofia Muscular</ion-option>\n          <ion-option value="Ganho de força">Ganho de força</ion-option>\n        </ion-select>\n      </ion-item>\n\n      \n    <ion-item>\n      <ion-label stacked>Grupo Muscular</ion-label>\n      <ion-select formControlName="grupoMuscular">\n        <ion-option value="Abdominal">Abdominal</ion-option>\n        <ion-option value="Trapézio">Trapézio</ion-option>\n        <ion-option value="Dorsal">Dorsal</ion-option>\n        <ion-option value="Ombro posterior">Ombro posterior</ion-option>\n        <ion-option value="Ombro frontal">Ombro frontal</ion-option>\n        <ion-option value="Ombro Lateral">Ombro Lateral</ion-option>\n        <ion-option value="Peito superior">Peito superior</ion-option>\n        <ion-option value="Peito">Peito</ion-option>\n        <ion-option value="Biceps">Biceps</ion-option>\n        <ion-option value="Triceps Lateral">Triceps Lateral</ion-option>\n        <ion-option value="Triceps branquial">Triceps branquial</ion-option>\n        <ion-option value="Antebraço">Antebraço</ion-option>\n        <ion-option value="Glúteo">Glúteo</ion-option>\n        <ion-option value="Quadrícepes">Quadrícepes</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label stacked>Grupo Muscular</ion-label>\n        <ion-select formControlName="grupoMuscular2">\n          <ion-option value="Abdominal">Abdominal</ion-option>\n          <ion-option value="Trapézio">Trapézio</ion-option>\n          <ion-option value="Dorsal">Dorsal</ion-option>\n          <ion-option value="Ombro posterior">Ombro posterior</ion-option>\n          <ion-option value="Ombro frontal">Ombro frontal</ion-option>\n          <ion-option value="Ombro Lateral">Ombro Lateral</ion-option>\n          <ion-option value="Peito superior">Peito superior</ion-option>\n          <ion-option value="Peito">Peito</ion-option>\n          <ion-option value="Biceps">Biceps</ion-option>\n          <ion-option value="Triceps Lateral">Triceps Lateral</ion-option>\n          <ion-option value="Triceps branquial">Triceps branquial</ion-option>\n          <ion-option value="Antebraço">Antebraço</ion-option>\n          <ion-option value="Glúteo">Glúteo</ion-option>\n          <ion-option value="Quadrícepes">Quadrícepes</ion-option>\n        </ion-select>\n      </ion-item>\n\n    <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Salvar Treino</button>\n\n    <ion-segment color="dark">\n      <ion-segment-button value="standard">\n        EXERCÍCIOS\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let exercise of listExercise">\n    \n       \n    \n          <ion-item-options side="left">\n            <button ion-button color="secondary" (click)="editExercise(exercise)">\n              <ion-icon name="create"></ion-icon>\n            </button>\n            <button ion-button color="danger" (click)="removeExercise(exercise.key)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n            \n          </ion-item-options>\n    \n          \n        </ion-item-sliding>\n      </ion-list>\n\n\n\n      <ion-list>\n          <ion-item-sliding *ngFor="let exercise of listExercise">\n            <ion-item>\n                <h2>Exercício: {{exercise.nomeExercicio}}</h2>\n                <h4>Musculo: {{exercise.grupoMuscular}}</h4>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                        <p>Série</p>\n                    </ion-col>\n                    <ion-col col-6>\n                        <p>Repetição</p>\n                    </ion-col>\n                    <ion-col>\n                        <p>Carga</p>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                     <ion-col>\n                        <p>{{exercise.serie}}</p>\n                     </ion-col>\n                     <ion-col col-6>\n                        <p>{{exercise.repeticao}}</p>\n                     </ion-col>\n                     <ion-col>\n                        <p>{{exercise.carga}}</p>\n                     </ion-col>\n                    </ion-row>\n                  </ion-grid>\n            </ion-item>\n\n\n        <ion-item-options side="left">\n          <button ion-button color="secondary" (click)="editExercise(exercise.keyExercise)">\n            <ion-icon name="create"></ion-icon>\n          </button>\n          <button ion-button color="danger" (click)="removeExercise(exercise.keyExercise)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n    </ion-list>\n  </form>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="navigateAddWorkoutexercisePage()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\add-workout-program\add-workout-program.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_workout_program_workout_program__["a" /* WorkoutProgramProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_workout_program_workout_program__["a" /* WorkoutProgramProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_workout_program_exercise_workout_program_exercise__["a" /* WorkoutProgramExerciseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_workout_program_exercise_workout_program_exercise__["a" /* WorkoutProgramExerciseProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_exercise_exercise__["a" /* ExerciseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_exercise_exercise__["a" /* ExerciseProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _g || Object])
    ], AddWorkoutProgramPage);
    return AddWorkoutProgramPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=add-workout-program.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListWorkoutProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_workout_program_add_workout_program__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_workout_program_workout_program__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListWorkoutProgramPage = /** @class */ (function () {
    function ListWorkoutProgramPage(navCtrl, navParams, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.toast = toast;
        this.workoutProgram = this.provider.getAll();
    }
    ListWorkoutProgramPage.prototype.navigateAddWorkoutProgramPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_workout_program_add_workout_program__["a" /* AddWorkoutProgramPage */]);
    };
    ListWorkoutProgramPage.prototype.editExercise = function (workoutProgram) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_workout_program_add_workout_program__["a" /* AddWorkoutProgramPage */], { workoutProgram: workoutProgram });
    };
    ListWorkoutProgramPage.prototype.removeExercise = function (key) {
        var _this = this;
        this.provider.remove(key)
            .then(function () {
            _this.toast.create({ message: 'Contato removido com sucesso.', duration: 3000 }).present();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao remover o exercício.', duration: 3000 }).present();
        });
    };
    ListWorkoutProgramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-workout-program',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\list-workout-program\list-workout-program.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Treinos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding >\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let workoutProgram of workoutProgram | async">\n    \n          <ion-item>\n              <h1>{{workoutProgram.titulo}}</h1>\n              <h2>{{workoutProgram.objetivo}}</h2>\n          </ion-item>\n    \n    \n          <ion-item-options side="left">\n            <button ion-button color="secondary" (click)="editExercise(workoutProgram)">\n              <ion-icon name="create"></ion-icon>\n            </button>\n            <button ion-button color="danger" (click)="removeExercise(workoutProgram.key)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n          </ion-item-options>\n    \n        </ion-item-sliding>\n      </ion-list>\n\n  <ion-fab right bottom>\n      <button ion-fab color="primary" (click)="navigateAddWorkoutProgramPage()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\list-workout-program\list-workout-program.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_workout_program_workout_program__["a" /* WorkoutProgramProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ListWorkoutProgramPage);
    return ListWorkoutProgramPage;
}());

//# sourceMappingURL=list-workout-program.js.map

/***/ })

},[331]);
//# sourceMappingURL=main.js.map