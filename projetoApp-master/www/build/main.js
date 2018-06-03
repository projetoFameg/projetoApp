webpackJsonp([8],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(75);
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
                    descricao: exercise.descricao,
                    equipamento: exercise.equipamento,
                    grupoMuscular: exercise.grupoMuscular
                    //imagem: exercicse.imagem
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({
                    NomeExercicio: exercise.NomeExercicio,
                    descricao: exercise.descricao,
                    equipamento: exercise.equipamento,
                    grupoMuscular: exercise.grupoMuscular
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreinoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(75);
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
    function TreinoProvider(db) {
        this.db = db;
        this.PATH = 'treino/';
    }
    TreinoProvider.prototype.getAll = function () {
        return this.db.list(this.PATH)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    TreinoProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key)
            .snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    TreinoProvider.prototype.save = function (treino, exercise) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (treino.key) {
                _this.db.list(_this.PATH)
                    .update(treino.key, {
                    NomeExercicio: treino.NomeExercicio,
                    descricao: treino.descricao,
                    repeticoes: treino.repeticoes,
                    equipamento: exercise.equipamento,
                    grupoMuscular: exercise.grupoMuscular
                    //imagem: exercicse.imagem
                })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({
                    NomeExercicio: treino.NomeExercicio,
                    descricao: treino.descricao,
                    repeticoes: treino.repeticoes,
                    equipamento: exercise.equipamento,
                    grupoMuscular: exercise.grupoMuscular
                })
                    .then(function () { return resolve(); });
            }
        });
    };
    TreinoProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    TreinoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TreinoProvider);
    return TreinoProvider;
}());

//# sourceMappingURL=treino.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(83);
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

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_exercise_add_exercise__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_exercise_exercise__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin__ = __webpack_require__(67);
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
            selector: 'page-exercise-list',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\exercise-list\exercise-list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Lista de Exercícios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-fab right bottom>\n        <button ion-fab color="primary" (click)="navigateAddExercisePage()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let exercise of exercise | async">\n\n      <ion-item>\n          <h1>{{exercise.NomeExercicio}}</h1>\n          <h2>Grupo Muscular: {{exercise.grupoMuscular}}</h2>\n          <h2>Equipamento: {{exercise.equipamento}}</h2>\n          <p>Descriçao: {{exercise.descricao}}</p>\n          \n      </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button color="secondary" (click)="editExercise(exercise)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button color="danger" (click)="removeExercise(exercise.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n        \n      </ion-item-options>\n\n      \n    </ion-item-sliding>\n  </ion-list>\n  \n      <ion-fab bottom left>\n        <button ion-button round color="primary" (click)="signOut()"> logout   -\n          <ion-icon name="md-exit"></ion-icon>\n        </button>\n      </ion-fab>\n      \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\exercise-list\exercise-list.html"*/,
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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(36);
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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddExercisePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_exercise_exercise__ = __webpack_require__(117);
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
            descricao: [this.exercise.descricao, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            equipamento: [this.exercise.equipamento, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required],
            grupoMuscular: [this.exercise.grupoMuscular, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required]
            //imagem: [this.exercise.titulo, Validators.required]
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
            selector: 'page-add-exercise',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\add-exercise\add-exercise.html"*/'<!--\n  Generated template for the AddExercisePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="form">\n\n    <ion-item>\n      <ion-label stacked>Nome do exercício</ion-label>\n      <ion-input type="text" formControlName="NomeExercicio"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.NomeExercicio.valid && (form.controls.NomeExercicio.dirty || form.controls.NomeExercicio.touched)" color="danger">\n      <div [hidden]="!form.controls.NomeExercicio.errors.required">\n        O campo é obrigatório\n      </div>\n    </ion-item>\n      \n        <ion-item>\n          <ion-label stacked>Descrição</ion-label>\n          <ion-input type="text" formControlName="descricao"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.descricao.valid && (form.controls.descricao.dirty || form.controls.descricao.touched)" color="danger">\n            <div [hidden]="!form.controls.descricao.errors.required">\n              O campo é obrigatório\n            </div>\n          </ion-item>\n      \n        <ion-item>\n          <ion-label stacked>Equipamento</ion-label>\n          <ion-select formControlName="equipamento">\n            <ion-option value="Esteira">Esteira</ion-option>\n            <ion-option value="Bicicleta">Bicicleta</ion-option>\n            <ion-option value="Barra fixa">Barra fixa</ion-option>\n            <ion-option value="Barra">Barra fixa</ion-option>\n            <ion-option value="Barra V">Barra V</ion-option>\n            <ion-option value="Banco inclinado">Banco inclinado</ion-option>\n            <ion-option value="Banco declinado">Banco declinado</ion-option>\n            <ion-option value="Banco">Banco</ion-option>\n            <ion-option value="Cross over">Cross over</ion-option>\n            <ion-option value="Mesa flexora">Mesa flexora</ion-option>\n            <ion-option value="Leg Press 45*">Leg Press 45*</ion-option>\n            <ion-option value="Halteres">Halteres</ion-option>\n            <ion-option value="Corda">Corda</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.equipamento.valid && (form.controls.equipamento.dirty || form.controls.equipamento.touched)" color="danger">\n            <div [hidden]="!form.controls.equipamento.errors.required">\n              O campo é obrigatório\n            </div>\n          </ion-item>\n      \n        <ion-item>\n          <ion-label stacked>Grupo Muscular</ion-label>\n          <ion-select formControlName="grupoMuscular">\n            <ion-option value="Abdominal">Abdominal</ion-option>\n            <ion-option value="Trapézio">Trapézio</ion-option>\n            <ion-option value="Dorsal">Dorsal</ion-option>\n            <ion-option value="Ombro posterior">Ombro posterior</ion-option>           \n            <ion-option value="Ombro frontal">Ombro frontal</ion-option>\n            <ion-option value="Ombro Lateral">Ombro Lateral</ion-option>\n            <ion-option value="Peito superior">Peito superior</ion-option>\n            <ion-option value="Peito">Peito</ion-option>\n            <ion-option value="Biceps">Biceps</ion-option>\n            <ion-option value="Triceps Lateral">Triceps Lateral</ion-option>\n            <ion-option value="Triceps branquial">Triceps branquial</ion-option>\n            <ion-option value="Antebraço">Antebraço</ion-option>\n            <ion-option value="Glúteo">Glúteo</ion-option>\n            <ion-option value="Quadrícepes">Quadrícepes</ion-option>\n\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.grupoMuscular.valid && (form.controls.grupoMuscular.dirty || form.controls.grupoMuscular.touched)" color="danger">\n            <div [hidden]="!form.controls.grupoMuscular.errors.required">\n              O campo é obrigatório\n            </div>\n          </ion-item>\n      \n        <!-- <ion-item>\n          <ion-label stacked>Imagem</ion-label>\n          <ion-input ngControl="image" type="file" placeholder="Select Category Image" [(ngModel)]="exerciseItem.imagem"></ion-input>\n        </ion-item> -->\n      \n        <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Add Exercício</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\add-exercise\add-exercise.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__providers_exercise_exercise__["a" /* ExerciseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], AddExercisePage);
    return AddExercisePage;
}());

//# sourceMappingURL=add-exercise.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTreinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_treino_treino__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddTreinoPage = /** @class */ (function () {
    function AddTreinoPage(navCtrl, navParams, formBuilder, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.treino = this.navParams.data.treino || {};
        this.createForm();
        this.setupPageTitle();
    }
    AddTreinoPage.prototype.setupPageTitle = function () {
        this.title = this.navParams.data.treino ? 'Atualizar Treino' : 'Adicionar Treino';
    };
    AddTreinoPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.treino.key],
            NomeExercicio: [this.treino.NomeExercicio],
            descricao: [this.treino.descricao],
            repeticoes: [this.treino.repeticoes],
        });
    };
    AddTreinoPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.provider.save(this.form.value, this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Treino salvo com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o alterações.', duration: 3000 }).present();
                console.log(e);
            });
        }
    };
    AddTreinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-treino',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\add-treino\add-treino.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n \n  <form [formGroup]="form">\n\n      <ion-item>\n          <ion-label stacked>Título</ion-label>\n          <ion-input type="text" formControlName="NomeExercicio"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="!form.controls.NomeExercicio.valid && (form.controls.NomeExercicio.dirty || form.controls.NomeExercicio.touched)" color="danger">\n          <div [hidden]="!form.controls.NomeExercicio.errors.required">\n            O campo é obrigatório\n          </div>\n        </ion-item>\n\n        <ion-item>\n            <ion-label stacked>descricao</ion-label>\n            <ion-input type="text" formControlName="descricao"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="!form.controls.descricao.valid && (form.controls.descricao.dirty || form.controls.descricao.touched)" color="danger">\n              <div [hidden]="!form.controls.descricao.errors.required">\n                O campo é obrigatório\n              </div>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Repeticão</ion-label>\n                <ion-input type="text" formControlName="repeticoes"></ion-input>\n              </ion-item>\n              <ion-item *ngIf="!form.controls.repeticoes.valid && (form.controls.repeticoes.dirty || form.controls.repeticoes.touched)" color="danger">\n                  <div [hidden]="!form.controls.repeticoes.errors.required">\n                    O campo é obrigatório\n                  </div>\n                </ion-item>\n\n      \n          \n            \n                          \n        <!-- <ion-item>\n          <ion-label stacked>Imagem</ion-label>\n          <ion-input ngControl="image" type="file" placeholder="Select Category Image" [(ngModel)]="exerciseItem.imagem"></ion-input>\n        </ion-item> -->\n      \n        <button ion-button block type="submit" [disabled]="!form.valid" (click)="onSubmit()">Atualizar Treino</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\add-treino\add-treino.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_treino_treino__["a" /* TreinoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], AddTreinoPage);
    return AddTreinoPage;
}());

//# sourceMappingURL=add-treino.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(128);
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile_edit_profile__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(128);
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

/***/ 164:
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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(68);
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

/***/ 177:
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
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-exercise/add-exercise.module": [
		519,
		7
	],
	"../pages/add-treino/add-treino.module": [
		520,
		6
	],
	"../pages/edit-profile/edit-profile.module": [
		521,
		5
	],
	"../pages/profile/profile.module": [
		522,
		1
	],
	"../pages/resetpassword/resetpassword.module": [
		523,
		4
	],
	"../pages/signin/signin.module": [
		524,
		3
	],
	"../pages/signinwithemail/signinwithemail.module": [
		525,
		0
	],
	"../pages/signup/signup.module": [
		526,
		2
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
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTreinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_treino_treino__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_treino_add_treino__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListTreinoPage = /** @class */ (function () {
    function ListTreinoPage(navCtrl, navParams, provider, authService, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.authService = authService;
        this.toast = toast;
        this.treino = this.provider.getAll();
    }
    ListTreinoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListTreinoPage');
    };
    ListTreinoPage.prototype.navigateAddTreinoPage = function () {
        // Navegar o usuário para a AddExercisePage
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_treino_add_treino__["a" /* AddTreinoPage */]);
    };
    ListTreinoPage.prototype.editTreino = function (treino) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_treino_add_treino__["a" /* AddTreinoPage */], { treino: treino });
    };
    ListTreinoPage.prototype.removeTreino = function (key) {
        var _this = this;
        this.provider.remove(key)
            .then(function () {
            _this.toast.create({ message: 'Treino removido com sucesso.', duration: 3000 }).present();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao remover o treino.', duration: 3000 }).present();
        });
    };
    ListTreinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-treino',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\list-treino\list-treino.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Lista de Treinos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-fab right bottom>\n        <button ion-fab color="primary" (click)="navigateAddTreinoPage()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let treino of treino | async">\n\n      <ion-item>\n        <h2><p>NomeExercicio: </p>{{treino.NomeExercicio}} </h2>\n        <h2><p>descricao: </p>{{treino.descricao}} </h2>\n        <h3><p>repeticoes: </p>{{treino.repeticoes}}</h3>\n       \n     \n      </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button color="secondary" (click)="editTreino(treino)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button color="danger" (click)="removeTreino(treino.key)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n        \n      </ion-item-options>\n\n      \n    </ion-item-sliding>\n  </ion-list>\n  \n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\list-treino\list-treino.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_treino_treino__["a" /* TreinoProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ListTreinoPage);
    return ListTreinoPage;
}());

//# sourceMappingURL=list-treino.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(347);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//enableProdMode();
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_resetpassword_resetpassword__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_exercise_add_exercise__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_exercise_list_exercise_list__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_profile_edit_profile__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_list_profile_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_servicenpm_auth_servicenpm__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_exercise_exercise__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_plus__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_profile_profile__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_treino_treino__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_list_treino_list_treino__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_add_treino_add_treino__ = __webpack_require__(161);
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_exercise_add_exercise__["a" /* AddExercisePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_exercise_list_exercise_list__["a" /* ExerciseListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_list_profile_list__["a" /* ProfileListPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_list_treino_list_treino__["a" /* ListTreinoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_add_treino_add_treino__["a" /* AddTreinoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-exercise/add-exercise.module#AddExercisePageModule', name: 'AddExercisePage', segment: 'add-exercise', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-treino/add-treino.module#AddTreinoPageModule', name: 'AddTreinoPage', segment: 'add-treino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpassword/resetpassword.module#ResetpasswordPageModule', name: 'ResetpasswordPage', segment: 'resetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#LoginPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signinwithemail/signinwithemail.module#LoginPageModule', name: 'SigninWithEmailPage', segment: 'signinwithemail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_exercise_add_exercise__["a" /* AddExercisePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_exercise_list_exercise_list__["a" /* ExerciseListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_list_profile_list__["a" /* ProfileListPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_list_treino_list_treino__["a" /* ListTreinoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_add_treino_add_treino__["a" /* AddTreinoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_servicenpm_auth_servicenpm__["a" /* AuthServicenpmProvider */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_18__providers_exercise_exercise__["a" /* ExerciseProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_22__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_treino_treino__["a" /* TreinoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(130);
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

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(67);
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

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServicenpmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(516);
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__exercise_list_exercise_list__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(130);
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

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exercise_list_exercise_list__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_list_profile_list__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_treino_list_treino__ = __webpack_require__(276);
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
    HomePage.prototype.ExerciciosRedirect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__exercise_list_exercise_list__["a" /* ExerciseListPage */]);
    };
    HomePage.prototype.ProfileRedirect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__profile_list_profile_list__["a" /* ProfileListPage */]);
    };
    HomePage.prototype.TreinoRedirect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__list_treino_list_treino__["a" /* ListTreinoPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Workout!\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n\n    <ion-menu [content]="content">\n        <ion-content>\n          <ion-list>\n          <button ion-button  color="primary" (click)="ProfileRedirect()"> \n                Perfil\n            </button>\n          </ion-list>\n          \n            <ion-list>\n            <button ion-button  color="primary" (click)="TreinoRedirect()"> \n                Montar Treino\n              </button>\n            </ion-list>\n        \n          <ion-list>\n              <button ion-button  color="primary" (click)="ExerciciosRedirect()"> \n                      Adicionar Exercicios\n              </button>\n          </ion-list>\n          </ion-content>\n     \n        </ion-menu>      \n      <ion-nav #content [root]="HomePage"></ion-nav>\n\n\n   <ion-buttons start>\n   <button ion-button icon-only menuToggle>   \n    <ion-icon name="menu"></ion-icon>       Menu Principal \n  </button>\n  </ion-buttons>\n\n  <ion-fab bottom left>\n  <button ion-button round color="primary" (click)="signOut()"> logout   -\n    <ion-icon name="md-exit"></ion-icon>\n  </button>\n</ion-fab>\n\n\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\ton\Desktop\projetoApp-master\projetoApp-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[328]);
//# sourceMappingURL=main.js.map